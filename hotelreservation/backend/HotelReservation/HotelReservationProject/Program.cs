using Autofac;
using Autofac.Core;
using Autofac.Extensions.DependencyInjection;
using AutoMapper;
using CoreLayer.Models;
using FluentValidation.AspNetCore;
using HotelReservationProject.Filters;
using HotelReservationProject.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RepositoryLayer.Context;
using RepositoryLayer.Repositories;
using RepositoryLayer.UnitOfWorks;
using ServiceLayer.Services;
using SharedLibray.Extensions;
using System.Reflection;
using System.Text.Json.Serialization;
using System.Text.Json;
using Microsoft.AspNetCore.Mvc.Formatters;
using SharedLibray.Configuration;
using System.Security.Claims;
using CoreLayer.Configuration;
using HotelReservationProject.Middlewares;
using HotelReservationProject.CustomValidatior;
using HotelReservationProject.Location;
using SharedLibray.OptionModel;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers().AddFluentValidation(opt =>
{
    opt.RegisterValidatorsFromAssemblyContaining<Program>();
});

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.Configure<ApiBehaviorOptions>(options =>
{
    options.SuppressConsumesConstraintForFormFileParameters = true;
});
builder.Services.AddScoped(typeof(NotFoundFilters<,>));

builder.Services.AddAutoMapper(typeof(Mapper));

builder.Host.ConfigureContainer<ContainerBuilder>(containerbuilder =>
{
    containerbuilder.RegisterModule(new RepoServiceModel());
});

builder.Services.AddDbContext<AppDbContext>(x =>
{
    x.UseSqlServer(builder.Configuration.GetConnectionString("SqlServer"), opt =>
    {
        opt.MigrationsAssembly("RepositoryLayer");
    });
});


builder.Services.Configure<DataProtectionTokenProviderOptions>(opt =>
{
    opt.TokenLifespan = TimeSpan.FromHours(2);
});

builder.Services.AddIdentity<AppUser, IdentityRole>(opt =>
{
    //Sifre sartlari
    opt.User.RequireUniqueEmail = true;
    opt.Password.RequireNonAlphanumeric = false;
    opt.User.AllowedUserNameCharacters = "abcdefghijklmnoprstuvwxyz123456789_";
    opt.Password.RequiredLength = 8;
    opt.Password.RequireUppercase = true;
    opt.Password.RequireLowercase = false;
    opt.Password.RequireDigit = false;

    //Kilit kismi
    opt.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(3);
    opt.Lockout.MaxFailedAccessAttempts = 3;
}).AddPasswordValidator<PasswordValidatior>()
.AddErrorDescriber<LocationIdentityErrorDescriber>()
.AddUserValidator<UserValidatior>()
.AddEntityFrameworkStores<AppDbContext>()
.AddDefaultTokenProviders();


builder.Host.UseServiceProviderFactory(new AutofacServiceProviderFactory());

builder.Services.UserCustomValidationResponse();


builder.Services.AddCors(options =>
{
    options.AddPolicy("CorsPolicy", builder => builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
});

builder.Services.Configure<CustomTokenOption>(builder.Configuration.GetSection("TokenOption"));
builder.Services.Configure<List<Client>>(builder.Configuration.GetSection("Clients"));



//sonradan ekledim HotelOneDetail
builder.Services.AddControllers().AddJsonOptions(options =>
{
    options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;
    options.JsonSerializerOptions.WriteIndented = true;
});

var tokenOptions = builder.Configuration.GetSection("TokenOption").Get<CustomTokenOption>();
builder.Services.AddCustomTokenAuth(tokenOptions, builder.Configuration);

builder.Services.Configure<EmailSettings>(builder.Configuration.GetSection("EmailSettings"));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}


app.UseCustomException();
app.UseHttpsRedirection();
app.UseRouting();
app.UseAuthentication();


app.UseCors("CorsPolicy");
app.UseAuthorization();

app.MapControllers();

app.Run();
