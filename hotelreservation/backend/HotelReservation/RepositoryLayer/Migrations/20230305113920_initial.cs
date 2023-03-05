using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace RepositoryLayer.Migrations
{
    /// <inheritdoc />
    public partial class initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Abouts",
                columns: table => new
                {
                    AboutId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AboutName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AboutDescription = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AboutImage = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AboutDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Abouts", x => x.AboutId);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoles",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    NormalizedName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Categories",
                columns: table => new
                {
                    CategoryId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CategoryName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CategoryImage = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Categories", x => x.CategoryId);
                });

            migrationBuilder.CreateTable(
                name: "Cities",
                columns: table => new
                {
                    CityId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CityName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CityImage = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cities", x => x.CityId);
                });

            migrationBuilder.CreateTable(
                name: "Contacts",
                columns: table => new
                {
                    ContactId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ContactSubject = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ContactEmail = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ContactMessage = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Contacts", x => x.ContactId);
                });

            migrationBuilder.CreateTable(
                name: "Degres",
                columns: table => new
                {
                    DegreId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DegreName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DegreValue = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Degres", x => x.DegreId);
                });

            migrationBuilder.CreateTable(
                name: "UserRefreshTokens",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    userId = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Code = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Expiration = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserRefreshTokens", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoleClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RoleId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ClaimType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClaimValue = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoleClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUsers",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    BirthDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    Image = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Status = table.Column<bool>(type: "bit", nullable: false),
                    CityId = table.Column<int>(type: "int", nullable: true),
                    UserName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    NormalizedUserName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    Email = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    NormalizedEmail = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    EmailConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    PasswordHash = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SecurityStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    TwoFactorEnabled = table.Column<bool>(type: "bit", nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: true),
                    LockoutEnabled = table.Column<bool>(type: "bit", nullable: false),
                    AccessFailedCount = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUsers", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUsers_Cities_CityId",
                        column: x => x.CityId,
                        principalTable: "Cities",
                        principalColumn: "CityId");
                });

            migrationBuilder.CreateTable(
                name: "Hotels",
                columns: table => new
                {
                    HotelId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    HotelName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    HotelPrice = table.Column<decimal>(type: "decimal(18,3)", nullable: false),
                    HotelImage = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    HotelLocation = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CategoryId = table.Column<int>(type: "int", nullable: false),
                    DegreId = table.Column<int>(type: "int", nullable: false),
                    CityId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Hotels", x => x.HotelId);
                    table.ForeignKey(
                        name: "FK_Hotels_Categories_CategoryId",
                        column: x => x.CategoryId,
                        principalTable: "Categories",
                        principalColumn: "CategoryId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Hotels_Cities_CityId",
                        column: x => x.CityId,
                        principalTable: "Cities",
                        principalColumn: "CityId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Hotels_Degres_DegreId",
                        column: x => x.DegreId,
                        principalTable: "Degres",
                        principalColumn: "DegreId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ClaimType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClaimValue = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUserClaims_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserLogins",
                columns: table => new
                {
                    LoginProvider = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ProviderKey = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ProviderDisplayName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserLogins", x => new { x.LoginProvider, x.ProviderKey });
                    table.ForeignKey(
                        name: "FK_AspNetUserLogins_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserRoles",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    RoleId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserRoles", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserTokens",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    LoginProvider = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Value = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
                    table.ForeignKey(
                        name: "FK_AspNetUserTokens_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Comments",
                columns: table => new
                {
                    CommentId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CommentDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CommentSubject = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CommentMessage = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CommentStatus = table.Column<bool>(type: "bit", nullable: false),
                    HotelId = table.Column<int>(type: "int", nullable: false),
                    DegreId = table.Column<int>(type: "int", nullable: false),
                    UserId = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Comments", x => x.CommentId);
                    table.ForeignKey(
                        name: "FK_Comments_Degres_DegreId",
                        column: x => x.DegreId,
                        principalTable: "Degres",
                        principalColumn: "DegreId");
                    table.ForeignKey(
                        name: "FK_Comments_Hotels_HotelId",
                        column: x => x.HotelId,
                        principalTable: "Hotels",
                        principalColumn: "HotelId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Facilities",
                columns: table => new
                {
                    FacilityId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FacilityName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    HotelId = table.Column<int>(type: "int", nullable: false),
                    DegreId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Facilities", x => x.FacilityId);
                    table.ForeignKey(
                        name: "FK_Facilities_Degres_DegreId",
                        column: x => x.DegreId,
                        principalTable: "Degres",
                        principalColumn: "DegreId");
                    table.ForeignKey(
                        name: "FK_Facilities_Hotels_HotelId",
                        column: x => x.HotelId,
                        principalTable: "Hotels",
                        principalColumn: "HotelId");
                });

            migrationBuilder.CreateTable(
                name: "HotelDetails",
                columns: table => new
                {
                    HotelDetailId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Image1 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Image2 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Image3 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Image4 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Image5 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Image6 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Image7 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Image8 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Image9 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    HotelMap = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    HotelId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HotelDetails", x => x.HotelDetailId);
                    table.ForeignKey(
                        name: "FK_HotelDetails_Hotels_HotelId",
                        column: x => x.HotelId,
                        principalTable: "Hotels",
                        principalColumn: "HotelId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Quentions",
                columns: table => new
                {
                    QuentionsId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    QuentionsName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    QuentionsMessage = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    HotelId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Quentions", x => x.QuentionsId);
                    table.ForeignKey(
                        name: "FK_Quentions_Hotels_HotelId",
                        column: x => x.HotelId,
                        principalTable: "Hotels",
                        principalColumn: "HotelId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Rooms",
                columns: table => new
                {
                    RoomId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RoomName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    RoomImage = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    RoomPrice = table.Column<decimal>(type: "decimal(18,3)", nullable: false),
                    HotelId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Rooms", x => x.RoomId);
                    table.ForeignKey(
                        name: "FK_Rooms_Hotels_HotelId",
                        column: x => x.HotelId,
                        principalTable: "Hotels",
                        principalColumn: "HotelId");
                });

            migrationBuilder.CreateTable(
                name: "RoomDetails",
                columns: table => new
                {
                    RoomDetailId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Image1 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Image2 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Image3 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    RoomId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RoomDetails", x => x.RoomDetailId);
                    table.ForeignKey(
                        name: "FK_RoomDetails_Rooms_RoomId",
                        column: x => x.RoomId,
                        principalTable: "Rooms",
                        principalColumn: "RoomId");
                });

            migrationBuilder.CreateTable(
                name: "Reservations",
                columns: table => new
                {
                    ReservationId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ArrivalDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ReturnDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    NumberPeople = table.Column<int>(type: "int", nullable: false),
                    UserId = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    RoomDetailId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Reservations", x => x.ReservationId);
                    table.ForeignKey(
                        name: "FK_Reservations_RoomDetails_RoomDetailId",
                        column: x => x.RoomDetailId,
                        principalTable: "RoomDetails",
                        principalColumn: "RoomDetailId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Abouts",
                columns: new[] { "AboutId", "AboutDate", "AboutDescription", "AboutImage", "AboutName" },
                values: new object[,]
                {
                    { 1, new DateTime(2023, 3, 5, 14, 39, 20, 630, DateTimeKind.Local).AddTicks(2954), "10 larca oteli tercihlerinize göre filtreleyerek saniyeler içinde size en uygun otelleri bulabilirsiniz", "https://cdn.enuygun.com/otel/v-083f8/static/images/icons/option.svg", "Sayısız Seçenek" },
                    { 2, new DateTime(2023, 3, 5, 14, 39, 20, 630, DateTimeKind.Local).AddTicks(2976), "Kafanızı karıştıran fiyat ve hizmet seçenekleri arasında kaybolmayın, tercihlerinizi belirleyip size en uygun otelde odanızı hemen ayırtın.", "https://cdn.enuygun.com/otel/v-083f8/static/images/icons/location.svg", "Uygun Oteller" },
                    { 3, new DateTime(2023, 3, 5, 14, 39, 20, 630, DateTimeKind.Local).AddTicks(2978), "Enuygun sayesinde aradığınız oteli bulmak için sadece birkaç saniyeye ihtiyacınız var.", "https://cdn.enuygun.com/otel/v-083f8/static/images/icons/fast-easy.svg", "Hızlı Ve Kolay" },
                    { 4, new DateTime(2023, 3, 5, 14, 39, 20, 630, DateTimeKind.Local).AddTicks(2979), "Tüm ödeme işleriniz, dünyanın önde gelen güvenlik sertifikası şirketi DigiCert koruması altındadır.", "https://cdn.enuygun.com/otel/v-083f8/static/images/icons/trust.svg", "Güvenle Alın" }
                });

            migrationBuilder.InsertData(
                table: "Categories",
                columns: new[] { "CategoryId", "CategoryImage", "CategoryName" },
                values: new object[,]
                {
                    { 1, "https://cdn.enuygun.com/otel/v-083f8/static/images/theme-icons/bungalov.svg", "Bungalov" },
                    { 2, "https://cdn.enuygun.com/otel/v-083f8/static/images/theme-icons/termal.svg", "Termal" },
                    { 3, "https://cdn.enuygun.com/otel/v-083f8/static/images/theme-icons/tatil-koyu.svg", "Tatil Köyleri" },
                    { 4, "https://cdn.enuygun.com/otel/v-083f8/static/images/theme-icons/pansiyon.svg", "Pansiyonlar" },
                    { 5, "https://cdn.enuygun.com/otel/v-083f8/static/images/theme-icons/butik.svg", "Butik" },
                    { 6, "https://cdn.enuygun.com/otel/v-083f8/static/images/theme-icons/islami.svg", "Muhafazakar" },
                    { 7, "https://cdn.enuygun.com/otel/v-083f8/static/images/theme-icons/balayi-ciftlerine-uygun.svg", "Balayı" },
                    { 8, "https://cdn.enuygun.com/otel/v-083f8/static/images/theme-icons/engelli-dostu.svg", "Engelli Dostu" },
                    { 9, "https://cdn.enuygun.com/otel/v-083f8/static/images/theme-icons/aquapark.svg", "Aquaparklı" },
                    { 10, "https://cdn.enuygun.com/otel/v-083f8/static/images/theme-icons/doga.svg", "Doğa" },
                    { 11, "https://cdn.enuygun.com/otel/v-083f8/static/images/theme-icons/dag.svg", "Dağ " },
                    { 12, "https://cdn.enuygun.com/otel/v-083f8/static/images/theme-icons/spa.svg", "Spa" },
                    { 13, "https://cdn.enuygun.com/otel/v-083f8/static/images/theme-icons/denize-sifir.svg", "Denize Sıfır" }
                });

            migrationBuilder.InsertData(
                table: "Cities",
                columns: new[] { "CityId", "CityImage", "CityName" },
                values: new object[,]
                {
                    { 1, "https://cdn.enuygun.com/otel/v-07c5a/static/images/good-place/antalya.jpg", "Antalya" },
                    { 2, "https://cdn.enuygun.com/otel/v-07c5a/static/images/good-place/istanbul.jpg", "İstanbul" },
                    { 3, "https://cdn.enuygun.com/otel/v-07c5a/static/images/good-place/ankara.jpg", "Ankara" },
                    { 4, "https://cdn.enuygun.com/otel/v-07c5a/static/images/good-place/bodrum.jpg", "Bodrum" },
                    { 5, "https://cdn2.enuygun.com/media/lib/310x206/uploads/image/amsterdam-32361.jpeg", "Amsterdam" },
                    { 6, "https://cdn.enuygun.com/otel/v-07c5a/static/images/good-place/londra.jpg", "Londra" },
                    { 7, "https://cdn.enuygun.com/otel/v-07c5a/static/images/good-place/paris.jpg", "Paris" },
                    { 8, "https://cdn.enuygun.com/otel/v-07c5a/static/images/good-place/roma.jpg", "Roma" },
                    { 9, "data:image/jpeg;base64,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", "Kıbrıs" }
                });

            migrationBuilder.InsertData(
                table: "Degres",
                columns: new[] { "DegreId", "DegreName", "DegreValue" },
                values: new object[,]
                {
                    { 1, "Olağanüstü", 10 },
                    { 2, "Mükemmel", 9 },
                    { 3, "Harika", 8 },
                    { 4, "Çok İyi", 7 },
                    { 5, " İyi", 6 }
                });

            migrationBuilder.InsertData(
                table: "Hotels",
                columns: new[] { "HotelId", "CategoryId", "CityId", "DegreId", "HotelImage", "HotelLocation", "HotelName", "HotelPrice" },
                values: new object[,]
                {
                    { 1, 9, 1, 1, "https://cdn3.enuygun.com/media/lib/1x250/uploads/image/green-garden-resort-hotel-antalya-genel-38176775.jpg", "Obagöl Mevkii. Obaçay Cad., 2. Sk., 07460 Alanya/Antalya", "Green Garden Resort Hotel", 21318m },
                    { 2, 9, 1, 1, "https://cdn3.enuygun.com/media/lib/1x250/uploads/image/susesi-luxury-resort-antalya-genel-39097853.jpg", "İskele Mevkii, 07450 Belek/Serik/Antalya", "Susesi Luxury Resort   ", 40475m },
                    { 3, 9, 9, 4, "https://cdn3.enuygun.com/media/lib/1x250/uploads/image/buyuk-anadolu-girne-hotel-kibris-genel-38526922.jpg", "Girne/Kuzey Kıbrıs Türk Cumhuriyeti", "Büyük Anadolu Girne Hotel", 8356m },
                    { 4, 12, 1, 2, "https://cdn3.enuygun.com/media/lib/1x250/uploads/image/luna-blanca-resort-spa-antalya-genel-36887047.webp", "Kumköy Cd., 283. Sokak, 07600 Manavgat/Antalya", "Luna Blanca Resort Spa", 15220m },
                    { 5, 9, 2, 2, "https://cdn3.enuygun.com/media/lib/1x250/uploads/image/somerset-maslak-istanbul-istanbul-27564701.jpg", "Maslak, Sarıyer, İstanbul", "Somerset Maslak Istanbul", 4904m },
                    { 6, 12, 2, 1, "https://cdn3.enuygun.com/media/lib/1x250/uploads/image/hilton-istanbul-bosphorus-istanbul-37295703.jpg", "Harbiye, Şişli, İstanbul", "Hilton Istanbul Bosphorus", 4458m },
                    { 7, 9, 2, 1, "https://cdn3.enuygun.com/media/lib/1x250/uploads/image/radisson-blu-spa-tuzla-istanbul-38198019.jpg", "Radisson Blu Hotel Spa Tuzla", "Tuzla, İstanbul", 3007m },
                    { 8, 9, 4, 4, "https://cdn3.enuygun.com/media/lib/1x250/uploads/image/costa-maya-bodrum-bodrum-36912949.jpg", "Çarşı, Bodrum Merkez, Muğla", "Costa Maya Bodrum", 504m },
                    { 9, 12, 4, 2, "https://cdn3.enuygun.com/media/lib/1x250/uploads/image/bodrium-and-you-spa-bodrum-36764953.jpg", "Eskiçeşme, Bodrum Merkez, Muğla", "\r\nBodrium Hotel And You Spa", 1635m }
                });

            migrationBuilder.InsertData(
                table: "Facilities",
                columns: new[] { "FacilityId", "DegreId", "FacilityName", "HotelId" },
                values: new object[,]
                {
                    { 1, 1, "Yemek", 1 },
                    { 2, 1, "Servis", 1 },
                    { 3, 1, "Lokasyon", 1 },
                    { 4, 1, "Puan", 1 },
                    { 5, 1, "Temizlik", 1 }
                });

            migrationBuilder.InsertData(
                table: "HotelDetails",
                columns: new[] { "HotelDetailId", "HotelId", "HotelMap", "Image1", "Image2", "Image3", "Image4", "Image5", "Image6", "Image7", "Image8", "Image9" },
                values: new object[,]
                {
                    { 1, 1, "https://goo.gl/maps/NVdHZDFRRH54qoMw8", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/green-garden-resort-hotel-antalya-genel-40582375.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/green-garden-resort-hotel-antalya-genel-40582376.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/green-garden-resort-hotel-antalya-genel-40582377.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/green-garden-resort-hotel-antalya-genel-40582378.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/green-garden-resort-hotel-antalya-genel-40582379.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/green-garden-resort-hotel-antalya-genel-40582381.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/green-garden-resort-hotel-antalya-genel-40582384.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/green-garden-resort-hotel-antalya-genel-40582385.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/green-garden-resort-hotel-antalya-genel-40582393.webp" },
                    { 2, 2, "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.431110509297!2d31.03679701524925!3d36.85609847993706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4074efde6cd79259%3A0xda0d0175715a1421!2sSusesi%20Luxury%20Resort!5e0!3m2!1str!2str!4v1676720181955!5m2!1str!2str\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/susesi-luxury-resort-antalya-genel-40799743.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/susesi-luxury-resort-antalya-genel-40799744.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/susesi-luxury-resort-antalya-genel-40799745.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/susesi-luxury-resort-antalya-genel-40799746.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/susesi-luxury-resort-antalya-genel-40799750.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/susesi-luxury-resort-antalya-genel-40799753.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/susesi-luxury-resort-antalya-genel-40799754.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/susesi-luxury-resort-antalya-genel-40799755.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/susesi-luxury-resort-antalya-genel-40799756.webp" },
                    { 3, 3, "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6509.924997754389!2d33.31546567593716!3d35.331752721108735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de1333e6e63e1f%3A0x63167cff0325308a!2sB%C3%BCy%C3%BCk%20Anadolu%20Girne%20Hotel!5e0!3m2!1str!2str!4v1676720655877!5m2!1str!2str\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/buyuk-anadolu-girne-hotel-kibris-havuz-38526923.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/buyuk-anadolu-girne-hotel-kibris-spa-saglik-38526924.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/buyuk-anadolu-girne-hotel-kibris-oda-39498110.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/buyuk-anadolu-girne-hotel-kibris-oda-39498111.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/buyuk-anadolu-girne-hotel-kibris-oda-39498112.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/buyuk-anadolu-girne-hotel-kibris-genel-38526922.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/buyuk-anadolu-girne-hotel-kibris-havuz-38526923.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/buyuk-anadolu-girne-hotel-kibris-spa-saglik-38526924.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/buyuk-anadolu-girne-hotel-kibris-oda-39498111.webp" },
                    { 4, 4, "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3194.488570891468!2d31.35023831524779!3d36.8068107799472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c35ecb6607d369%3A0x2326c02a0dc26db8!2sLuna%20Blanca%20Resort%20%26%20Spa!5e0!3m2!1str!2str!4v1676721585554!5m2!1str!2str\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade", "https://cdn3.enuygun.com/media/lib/1x400/uploads/image/luna-blanca-resort-spa-antalya-genel-39563033.jpg", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/luna-blanca-resort-spa-antalya-genel-39563035.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/luna-blanca-resort-spa-antalya-havuz-39563040.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/luna-blanca-resort-spa-antalya-deniz-39563038.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/luna-blanca-resort-spa-antalya-yeme-icme-39563039.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/luna-blanca-resort-spa-antalya-yeme-icme-39563050.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/luna-blanca-resort-spa-antalya-yeme-icme-39563053.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/luna-blanca-resort-spa-antalya-yeme-icme-39563054.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/luna-blanca-resort-spa-antalya-spa-saglik-39563067.webp" },
                    { 5, 5, "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3005.655357462936!2d29.00669291537778!3d41.12021737928958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab5b9db1143b9%3A0xf65490841babf00!2sSomerset%20Maslak%20Istanbul!5e0!3m2!1str!2str!4v1676722412227!5m2!1str!2str\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade", "https://cdn3.enuygun.com/media/lib/1x400/uploads/image/somerset-maslak-istanbul-istanbul-genel-27564703.jpg", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/somerset-maslak-istanbul-istanbul-havuz-27564701.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/somerset-maslak-istanbul-istanbul-havuz-27564715.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/somerset-maslak-istanbul-istanbul-aktiviteler-27564685.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/somerset-maslak-istanbul-istanbul-lobi-27564697.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/somerset-maslak-istanbul-istanbul-lobi-27564696.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/somerset-maslak-istanbul-istanbul-lobi-27564706.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/somerset-maslak-istanbul-istanbul-lobi-27564704.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/somerset-maslak-istanbul-istanbul-manzara-peyzaj-27564705.webp" },
                    { 6, 6, "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.1214238095263!2d28.987021115375384!3d41.044473679297134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab03b5a0b0c4d%3A0xe964200b7b8e87ea!2sHilton%20%C4%B0stanbul%20Bosphorus!5e0!3m2!1str!2str!4v1676722613474!5m2!1str!2str\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade", "https://cdn3.enuygun.com/media/lib/1x400/uploads/image/hilton-istanbul-bosphorus-istanbul-genel-37295684.jpg", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/hilton-istanbul-bosphorus-istanbul-genel-39295600.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/hilton-istanbul-bosphorus-istanbul-genel-39295601.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/hilton-istanbul-bosphorus-istanbul-havuz-37295601.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/hilton-istanbul-bosphorus-istanbul-havuz-37295721.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/hilton-istanbul-bosphorus-istanbul-havuz-37295723.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/hilton-istanbul-bosphorus-istanbul-yeme-icme-37295649.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/hilton-istanbul-bosphorus-istanbul-aktiviteler-37295576.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/hilton-istanbul-bosphorus-istanbul-aktiviteler-37295573.webp" },
                    { 7, 7, "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3016.8064728156337!2d29.31402321537002!3d40.8761210793143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cadc7e87513309%3A0xdc86803a3afcb1f2!2sRadisson%20Blu%20Hotel%20%26%20Spa%2C%20Istanbul%20Tuzla!5e0!3m2!1str!2str!4v1676722922169!5m2!1str!2str\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/radisson-blu-spa-tuzla-istanbul-yeme-icme-38293256.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/radisson-blu-spa-tuzla-istanbul-bar-38293258.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/radisson-blu-spa-tuzla-istanbul-lobi-38293253.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/radisson-blu-spa-tuzla-istanbul-oda-38198021.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/radisson-blu-spa-tuzla-istanbul-oda-38198022.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/radisson-blu-spa-tuzla-istanbul-oda-38293250.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/radisson-blu-spa-tuzla-istanbul-spor-38104576.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/radisson-blu-spa-tuzla-istanbul-havuz-38104578.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/radisson-blu-spa-tuzla-istanbul-spa-saglik-38388736.webp" },
                    { 8, 8, "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3184.8371747189913!2d27.426674815254508!3d37.03752847990045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14be6c3f7fd6dfed%3A0x88f6c5f46699d5d1!2sCosta%20Maya%20Hotel!5e0!3m2!1str!2str!4v1676723103065!5m2!1str!2str\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/costa-maya-bodrum-bodrum-genel-39501781.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/costa-maya-bodrum-bodrum-genel-39568244.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/costa-maya-bodrum-bodrum-yeme-icme-39501791.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/costa-maya-bodrum-bodrum-yeme-icme-39568250.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/costa-maya-bodrum-bodrum-manzara-peyzaj-39501788.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/costa-maya-bodrum-bodrum-oda-39501793.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/costa-maya-bodrum-bodrum-manzara-peyzaj-39501789.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/costa-maya-bodrum-bodrum-oda-39568249.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/costa-maya-bodrum-bodrum-oda-39568248.webp" },
                    { 9, 9, "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3184.857282602926!2d27.40969921525455!3d37.03704907990057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14be6c6e0eaad519%3A0x75df94bcf046bda0!2sBodrium%20Otel%20%26%20SPA!5e0!3m2!1str!2str!4v1676723345737!5m2!1str!2str\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade", "https://cdn3.enuygun.com/media/lib/1x400/uploads/image/bodrium-and-you-spa-bodrum-genel-39518871.jpg", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/bodrium-and-you-spa-bodrum-yeme-icme-39518873.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/bodrium-and-you-spa-bodrum-yeme-icme-39518885.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/bodrium-and-you-spa-bodrum-bar-39518900.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/bodrium-and-you-spa-bodrum-bar-39518902.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/bodrium-and-you-spa-bodrum-lobi-39518879.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/bodrium-and-you-spa-bodrum-lobi-39518881.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/bodrium-and-you-spa-bodrum-is-konferans-39518905.webp", "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/bodrium-and-you-spa-bodrum-oda-39518888.webp" }
                });

            migrationBuilder.InsertData(
                table: "Quentions",
                columns: new[] { "QuentionsId", "HotelId", "QuentionsMessage", "QuentionsName" },
                values: new object[,]
                {
                    { 1, 1, "Tesiste konaklayabileceğiniz toplam 19 oda bulunuyor.", "Tesiste kaç adet oda bulunuyor?" },
                    { 2, 1, "Otel için check-in saati 14:00'dan sonra başlar. Checkout işlemlerini ise 12:00 kadar yapabilirsiniz.", "Tesis için giriş ve çıkış saatleri nelerdir?" }
                });

            migrationBuilder.InsertData(
                table: "Rooms",
                columns: new[] { "RoomId", "HotelId", "RoomImage", "RoomName", "RoomPrice" },
                values: new object[,]
                {
                    { 1, 1, "https://cdn.tatilsepeti.com/Files/Images/TesisOda/02499/tsr02499637753594389133892.jpg", "Standart Kara Manzaralı Oda", 20619m },
                    { 2, 1, "https://cdn.tatilsepeti.com/Files/Images/TesisOda/02499/tsr02499637464063178641427.jpg", "1 Yatak Odalı Comfort Aile Odası Kara Manzara", 21994m },
                    { 3, 1, "https://cdn.tatilsepeti.com/Files/Images/TesisOda/02499/tsr02499637753594977813034.jpg", "Standart Deniz Manzaralı Oda", 21994m },
                    { 4, 1, "https://cdn.tatilsepeti.com/Files/Images/TesisOda/02499/tsr02499637823464711998501.jpg", "1 Yatak Odalı Comfort Aile Odası Deniz Manzara", 23369m }
                });

            migrationBuilder.InsertData(
                table: "RoomDetails",
                columns: new[] { "RoomDetailId", "Image1", "Image2", "Image3", "RoomId" },
                values: new object[,]
                {
                    { 1, "https://cdn.tatilsepeti.com/Files/Images/TesisOda/02499/tsr02499637753594405840440.jpg", "https://cdn.tatilsepeti.com/Files/Images/TesisOda/02499/tsr02499637753594432289866.jpg", "https://cdn.tatilsepeti.com/Files/Images/TesisOda/02499/tsr02499637753594470155558.jpg", 1 },
                    { 2, "https://cdn.tatilsepeti.com/Files/Images/TesisOda/02499/tsr02499637464063250216331.jpg", "https://cdn.tatilsepeti.com/Files/Images/TesisOda/02499/tsr02499637464063694337191.jpg", "https://cdn.tatilsepeti.com/Files/Images/TesisOda/02499/tsr02499637464063807519463.jpg", 2 },
                    { 3, "https://cdn.tatilsepeti.com/Files/Images/TesisOda/02499/tsr02499637753594977813034.jpg", "https://cdn.tatilsepeti.com/Files/Images/TesisOda/02499/tsr02499637753594992107538.jpg", "https://cdn.tatilsepeti.com/Files/Images/TesisOda/02499/tsr02499637753595019444135.jpg", 3 },
                    { 4, "https://cdn.tatilsepeti.com/Files/Images/TesisOda/02499/tsr02499637823464711998501.jpg", "https://cdn.tatilsepeti.com/Files/Images/TesisOda/02499/tsr02499637823464768857977.jpg", "https://cdn.tatilsepeti.com/Files/Images/TesisOda/02499/tsr02499637464063858799428.jpg", 4 }
                });

            migrationBuilder.CreateIndex(
                name: "IX_AspNetRoleClaims_RoleId",
                table: "AspNetRoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName",
                unique: true,
                filter: "[NormalizedName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserClaims_UserId",
                table: "AspNetUserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserLogins_UserId",
                table: "AspNetUserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_RoleId",
                table: "AspNetUserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                table: "AspNetUsers",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_CityId",
                table: "AspNetUsers",
                column: "CityId");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true,
                filter: "[NormalizedUserName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_Comments_DegreId",
                table: "Comments",
                column: "DegreId");

            migrationBuilder.CreateIndex(
                name: "IX_Comments_HotelId",
                table: "Comments",
                column: "HotelId");

            migrationBuilder.CreateIndex(
                name: "IX_Facilities_DegreId",
                table: "Facilities",
                column: "DegreId");

            migrationBuilder.CreateIndex(
                name: "IX_Facilities_HotelId",
                table: "Facilities",
                column: "HotelId");

            migrationBuilder.CreateIndex(
                name: "IX_HotelDetails_HotelId",
                table: "HotelDetails",
                column: "HotelId");

            migrationBuilder.CreateIndex(
                name: "IX_Hotels_CategoryId",
                table: "Hotels",
                column: "CategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_Hotels_CityId",
                table: "Hotels",
                column: "CityId");

            migrationBuilder.CreateIndex(
                name: "IX_Hotels_DegreId",
                table: "Hotels",
                column: "DegreId");

            migrationBuilder.CreateIndex(
                name: "IX_Quentions_HotelId",
                table: "Quentions",
                column: "HotelId");

            migrationBuilder.CreateIndex(
                name: "IX_Reservations_RoomDetailId",
                table: "Reservations",
                column: "RoomDetailId");

            migrationBuilder.CreateIndex(
                name: "IX_RoomDetails_RoomId",
                table: "RoomDetails",
                column: "RoomId");

            migrationBuilder.CreateIndex(
                name: "IX_Rooms_HotelId",
                table: "Rooms",
                column: "HotelId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Abouts");

            migrationBuilder.DropTable(
                name: "AspNetRoleClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserLogins");

            migrationBuilder.DropTable(
                name: "AspNetUserRoles");

            migrationBuilder.DropTable(
                name: "AspNetUserTokens");

            migrationBuilder.DropTable(
                name: "Comments");

            migrationBuilder.DropTable(
                name: "Contacts");

            migrationBuilder.DropTable(
                name: "Facilities");

            migrationBuilder.DropTable(
                name: "HotelDetails");

            migrationBuilder.DropTable(
                name: "Quentions");

            migrationBuilder.DropTable(
                name: "Reservations");

            migrationBuilder.DropTable(
                name: "UserRefreshTokens");

            migrationBuilder.DropTable(
                name: "AspNetRoles");

            migrationBuilder.DropTable(
                name: "AspNetUsers");

            migrationBuilder.DropTable(
                name: "RoomDetails");

            migrationBuilder.DropTable(
                name: "Rooms");

            migrationBuilder.DropTable(
                name: "Hotels");

            migrationBuilder.DropTable(
                name: "Categories");

            migrationBuilder.DropTable(
                name: "Cities");

            migrationBuilder.DropTable(
                name: "Degres");
        }
    }
}
