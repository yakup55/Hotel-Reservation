﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using RepositoryLayer.Context;

#nullable disable

namespace RepositoryLayer.Migrations
{
    [DbContext(typeof(AppDbContext))]
    partial class AppDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.2")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("CoreLayer.Models.About", b =>
                {
                    b.Property<int>("AboutId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("AboutId"));

                    b.Property<DateTime>("AboutDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("AboutDescription")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("AboutImage")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("AboutName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("AboutId");

                    b.ToTable("Abouts");

                    b.HasData(
                        new
                        {
                            AboutId = 1,
                            AboutDate = new DateTime(2023, 2, 15, 14, 0, 46, 953, DateTimeKind.Local).AddTicks(7439),
                            AboutDescription = "10 larca oteli tercihlerinize göre filtreleyerek saniyeler içinde size en uygun otelleri bulabilirsiniz",
                            AboutImage = "https://cdn.enuygun.com/otel/v-083f8/static/images/icons/option.svg",
                            AboutName = "Sayısız Seçenek"
                        },
                        new
                        {
                            AboutId = 2,
                            AboutDate = new DateTime(2023, 2, 15, 14, 0, 46, 953, DateTimeKind.Local).AddTicks(7451),
                            AboutDescription = "Kafanızı karıştıran fiyat ve hizmet seçenekleri arasında kaybolmayın, tercihlerinizi belirleyip size en uygun otelde odanızı hemen ayırtın.",
                            AboutImage = "https://cdn.enuygun.com/otel/v-083f8/static/images/icons/location.svg",
                            AboutName = "Uygun Oteller"
                        },
                        new
                        {
                            AboutId = 3,
                            AboutDate = new DateTime(2023, 2, 15, 14, 0, 46, 953, DateTimeKind.Local).AddTicks(7452),
                            AboutDescription = "Enuygun sayesinde aradığınız oteli bulmak için sadece birkaç saniyeye ihtiyacınız var.",
                            AboutImage = "https://cdn.enuygun.com/otel/v-083f8/static/images/icons/fast-easy.svg",
                            AboutName = "Hızlı Ve Kolay"
                        },
                        new
                        {
                            AboutId = 4,
                            AboutDate = new DateTime(2023, 2, 15, 14, 0, 46, 953, DateTimeKind.Local).AddTicks(7453),
                            AboutDescription = "Tüm ödeme işleriniz, dünyanın önde gelen güvenlik sertifikası şirketi DigiCert koruması altındadır.",
                            AboutImage = "https://cdn.enuygun.com/otel/v-083f8/static/images/icons/trust.svg",
                            AboutName = "Güvenle Alın"
                        });
                });

            modelBuilder.Entity("CoreLayer.Models.AppUser", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<int>("AccessFailedCount")
                        .HasColumnType("int");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<bool>("EmailConfirmed")
                        .HasColumnType("bit");

                    b.Property<bool>("LockoutEnabled")
                        .HasColumnType("bit");

                    b.Property<DateTimeOffset?>("LockoutEnd")
                        .HasColumnType("datetimeoffset");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("PasswordHash")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("PhoneNumberConfirmed")
                        .HasColumnType("bit");

                    b.Property<string>("SecurityStamp")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("TwoFactorEnabled")
                        .HasColumnType("bit");

                    b.Property<string>("UserName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasDatabaseName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasDatabaseName("UserNameIndex")
                        .HasFilter("[NormalizedUserName] IS NOT NULL");

                    b.ToTable("AspNetUsers", (string)null);
                });

            modelBuilder.Entity("CoreLayer.Models.Category", b =>
                {
                    b.Property<int>("CategoryId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("CategoryId"));

                    b.Property<string>("CategoryImage")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CategoryName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("CategoryId");

                    b.ToTable("Categories");

                    b.HasData(
                        new
                        {
                            CategoryId = 1,
                            CategoryImage = "https://cdn.enuygun.com/otel/v-083f8/static/images/theme-icons/bungalov.svg",
                            CategoryName = "Bungalov"
                        },
                        new
                        {
                            CategoryId = 2,
                            CategoryImage = "https://cdn.enuygun.com/otel/v-083f8/static/images/theme-icons/termal.svg",
                            CategoryName = "Termal"
                        },
                        new
                        {
                            CategoryId = 3,
                            CategoryImage = "https://cdn.enuygun.com/otel/v-083f8/static/images/theme-icons/tatil-koyu.svg",
                            CategoryName = "Tatil Köyleri"
                        },
                        new
                        {
                            CategoryId = 4,
                            CategoryImage = "https://cdn.enuygun.com/otel/v-083f8/static/images/theme-icons/pansiyon.svg",
                            CategoryName = "Pansiyonlar"
                        },
                        new
                        {
                            CategoryId = 5,
                            CategoryImage = "https://cdn.enuygun.com/otel/v-083f8/static/images/theme-icons/butik.svg",
                            CategoryName = "Butik"
                        },
                        new
                        {
                            CategoryId = 6,
                            CategoryImage = "https://cdn.enuygun.com/otel/v-083f8/static/images/theme-icons/islami.svg",
                            CategoryName = "Muhafazakar"
                        },
                        new
                        {
                            CategoryId = 7,
                            CategoryImage = "https://cdn.enuygun.com/otel/v-083f8/static/images/theme-icons/balayi-ciftlerine-uygun.svg",
                            CategoryName = "Balayı"
                        },
                        new
                        {
                            CategoryId = 8,
                            CategoryImage = "https://cdn.enuygun.com/otel/v-083f8/static/images/theme-icons/engelli-dostu.svg",
                            CategoryName = "Engelli Dostu"
                        },
                        new
                        {
                            CategoryId = 9,
                            CategoryImage = "https://cdn.enuygun.com/otel/v-083f8/static/images/theme-icons/aquapark.svg",
                            CategoryName = "Aquaparklı"
                        },
                        new
                        {
                            CategoryId = 10,
                            CategoryImage = "https://cdn.enuygun.com/otel/v-083f8/static/images/theme-icons/doga.svg",
                            CategoryName = "Doğa"
                        },
                        new
                        {
                            CategoryId = 11,
                            CategoryImage = "https://cdn.enuygun.com/otel/v-083f8/static/images/theme-icons/dag.svg",
                            CategoryName = "Dağ "
                        },
                        new
                        {
                            CategoryId = 12,
                            CategoryImage = "https://cdn.enuygun.com/otel/v-083f8/static/images/theme-icons/spa.svg",
                            CategoryName = "Spa"
                        },
                        new
                        {
                            CategoryId = 13,
                            CategoryImage = "https://cdn.enuygun.com/otel/v-083f8/static/images/theme-icons/denize-sifir.svg",
                            CategoryName = "Denize Sıfır"
                        });
                });

            modelBuilder.Entity("CoreLayer.Models.Comment", b =>
                {
                    b.Property<int>("CommentId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("CommentId"));

                    b.Property<DateTime>("CommentDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("CommentMessage")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("CommentRating")
                        .HasColumnType("int");

                    b.Property<bool>("CommentStatus")
                        .HasColumnType("bit");

                    b.Property<string>("CommentSubject")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("HotelId")
                        .HasColumnType("int");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("CommentId");

                    b.HasIndex("HotelId");

                    b.ToTable("Comments");
                });

            modelBuilder.Entity("CoreLayer.Models.Degre", b =>
                {
                    b.Property<int>("DegreId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("DegreId"));

                    b.Property<string>("DegreName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("DegreValue")
                        .HasColumnType("int");

                    b.HasKey("DegreId");

                    b.ToTable("Degres");

                    b.HasData(
                        new
                        {
                            DegreId = 1,
                            DegreName = "Olağanüstü",
                            DegreValue = 10
                        },
                        new
                        {
                            DegreId = 2,
                            DegreName = "Mükemmel",
                            DegreValue = 9
                        },
                        new
                        {
                            DegreId = 3,
                            DegreName = "Harika",
                            DegreValue = 8
                        },
                        new
                        {
                            DegreId = 4,
                            DegreName = "Çok İyi",
                            DegreValue = 7
                        },
                        new
                        {
                            DegreId = 5,
                            DegreName = " İyi",
                            DegreValue = 6
                        });
                });

            modelBuilder.Entity("CoreLayer.Models.Hotel", b =>
                {
                    b.Property<int>("HotelId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("HotelId"));

                    b.Property<int>("CategoryId")
                        .HasColumnType("int");

                    b.Property<int>("DegreId")
                        .HasColumnType("int");

                    b.Property<string>("HotelImage")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("HotelLocation")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("HotelName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal>("HotelPrice")
                        .HasColumnType("decimal(18,3)");

                    b.HasKey("HotelId");

                    b.HasIndex("CategoryId");

                    b.HasIndex("DegreId");

                    b.ToTable("Hotels");

                    b.HasData(
                        new
                        {
                            HotelId = 1,
                            CategoryId = 9,
                            DegreId = 1,
                            HotelImage = "https://cdn3.enuygun.com/media/lib/1x250/uploads/image/green-garden-resort-hotel-antalya-genel-38176775.jpg",
                            HotelLocation = "Obagöl Mevkii. Obaçay Cad., 2. Sk., 07460 Alanya/Antalya",
                            HotelName = "Green Garden Resort Hotel",
                            HotelPrice = 21318m
                        },
                        new
                        {
                            HotelId = 2,
                            CategoryId = 9,
                            DegreId = 1,
                            HotelImage = "https://cdn3.enuygun.com/media/lib/1x250/uploads/image/susesi-luxury-resort-antalya-genel-39097853.jpg",
                            HotelLocation = "İskele Mevkii, 07450 Belek/Serik/Antalya",
                            HotelName = "Susesi Luxury Resort   ",
                            HotelPrice = 40475m
                        },
                        new
                        {
                            HotelId = 3,
                            CategoryId = 9,
                            DegreId = 4,
                            HotelImage = "https://cdn3.enuygun.com/media/lib/1x250/uploads/image/buyuk-anadolu-girne-hotel-kibris-genel-38526922.jpg",
                            HotelLocation = "Girne/Kuzey Kıbrıs Türk Cumhuriyeti",
                            HotelName = "Büyük Anadolu Girne Hotel",
                            HotelPrice = 8356m
                        });
                });

            modelBuilder.Entity("CoreLayer.Models.HotelDetail", b =>
                {
                    b.Property<int>("HotelDetailId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("HotelDetailId"));

                    b.Property<int>("HotelId")
                        .HasColumnType("int");

                    b.Property<string>("HotelMap")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Image1")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Image2")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Image3")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Image4")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Image5")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Image6")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Image7")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Image8")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Image9")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("HotelDetailId");

                    b.HasIndex("HotelId");

                    b.ToTable("HotelDetails");
                });

            modelBuilder.Entity("CoreLayer.Models.Quentions", b =>
                {
                    b.Property<int>("QuentionsId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("QuentionsId"));

                    b.Property<int>("HotelId")
                        .HasColumnType("int");

                    b.Property<string>("QuentionsMessage")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("QuentionsName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("QuentionsId");

                    b.HasIndex("HotelId");

                    b.ToTable("Quentions");
                });

            modelBuilder.Entity("CoreLayer.Models.Reservation", b =>
                {
                    b.Property<int>("ReservationId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ReservationId"));

                    b.Property<DateTime>("ArrivalDate")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("ReturnDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ReservationId");

                    b.ToTable("Reservations");
                });

            modelBuilder.Entity("CoreLayer.Models.Room", b =>
                {
                    b.Property<int>("RoomId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("RoomId"));

                    b.Property<int>("HotelId")
                        .HasColumnType("int");

                    b.Property<string>("RoomImage")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("RoomName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal>("RoomPrice")
                        .HasColumnType("decimal(18,3)");

                    b.HasKey("RoomId");

                    b.HasIndex("HotelId");

                    b.ToTable("Rooms");
                });

            modelBuilder.Entity("CoreLayer.Models.RoomDetail", b =>
                {
                    b.Property<int>("RoomDetailId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("RoomDetailId"));

                    b.Property<string>("Image1")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Image2")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Image3")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("NumberDate")
                        .HasColumnType("int");

                    b.Property<int>("NumberPeople")
                        .HasColumnType("int");

                    b.Property<int>("RoomId")
                        .HasColumnType("int");

                    b.HasKey("RoomDetailId");

                    b.HasIndex("RoomId");

                    b.ToTable("RoomDetails");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRole", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasDatabaseName("RoleNameIndex")
                        .HasFilter("[NormalizedName] IS NOT NULL");

                    b.ToTable("AspNetRoles", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("ClaimType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("RoleId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("ClaimType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.Property<string>("LoginProvider")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ProviderKey")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ProviderDisplayName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("RoleId")
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("LoginProvider")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Value")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens", (string)null);
                });

            modelBuilder.Entity("CoreLayer.Models.Comment", b =>
                {
                    b.HasOne("CoreLayer.Models.Hotel", "Hotel")
                        .WithMany("Comments")
                        .HasForeignKey("HotelId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Hotel");
                });

            modelBuilder.Entity("CoreLayer.Models.Hotel", b =>
                {
                    b.HasOne("CoreLayer.Models.Category", "Category")
                        .WithMany("Hotels")
                        .HasForeignKey("CategoryId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("CoreLayer.Models.Degre", "Degre")
                        .WithMany("Hotels")
                        .HasForeignKey("DegreId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Category");

                    b.Navigation("Degre");
                });

            modelBuilder.Entity("CoreLayer.Models.HotelDetail", b =>
                {
                    b.HasOne("CoreLayer.Models.Hotel", "Hotel")
                        .WithMany("HotelDetails")
                        .HasForeignKey("HotelId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Hotel");
                });

            modelBuilder.Entity("CoreLayer.Models.Quentions", b =>
                {
                    b.HasOne("CoreLayer.Models.Hotel", "Hotel")
                        .WithMany("Quentions")
                        .HasForeignKey("HotelId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Hotel");
                });

            modelBuilder.Entity("CoreLayer.Models.Room", b =>
                {
                    b.HasOne("CoreLayer.Models.Hotel", "Hotel")
                        .WithMany("Rooms")
                        .HasForeignKey("HotelId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Hotel");
                });

            modelBuilder.Entity("CoreLayer.Models.RoomDetail", b =>
                {
                    b.HasOne("CoreLayer.Models.Room", "Room")
                        .WithMany("RoomDetails")
                        .HasForeignKey("RoomId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Room");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.HasOne("CoreLayer.Models.AppUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.HasOne("CoreLayer.Models.AppUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("CoreLayer.Models.AppUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.HasOne("CoreLayer.Models.AppUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("CoreLayer.Models.Category", b =>
                {
                    b.Navigation("Hotels");
                });

            modelBuilder.Entity("CoreLayer.Models.Degre", b =>
                {
                    b.Navigation("Hotels");
                });

            modelBuilder.Entity("CoreLayer.Models.Hotel", b =>
                {
                    b.Navigation("Comments");

                    b.Navigation("HotelDetails");

                    b.Navigation("Quentions");

                    b.Navigation("Rooms");
                });

            modelBuilder.Entity("CoreLayer.Models.Room", b =>
                {
                    b.Navigation("RoomDetails");
                });
#pragma warning restore 612, 618
        }
    }
}
