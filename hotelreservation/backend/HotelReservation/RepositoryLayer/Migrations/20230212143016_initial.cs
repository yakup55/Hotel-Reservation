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
                name: "AspNetUsers",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
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
                name: "Reservations",
                columns: table => new
                {
                    ReservationId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ArrivalDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ReturnDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UserId = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Reservations", x => x.ReservationId);
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
                    DegreId = table.Column<int>(type: "int", nullable: false)
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
                        name: "FK_Hotels_Degres_DegreId",
                        column: x => x.DegreId,
                        principalTable: "Degres",
                        principalColumn: "DegreId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Comments",
                columns: table => new
                {
                    CommentId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CommentDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CommentMessage = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    HotelId = table.Column<int>(type: "int", nullable: false),
                    UserId = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Comments", x => x.CommentId);
                    table.ForeignKey(
                        name: "FK_Comments_Hotels_HotelId",
                        column: x => x.HotelId,
                        principalTable: "Hotels",
                        principalColumn: "HotelId",
                        onDelete: ReferentialAction.Cascade);
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
                        principalColumn: "HotelId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "RoomDetails",
                columns: table => new
                {
                    RoomDetailId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NumberPeople = table.Column<int>(type: "int", nullable: false),
                    NumberDate = table.Column<int>(type: "int", nullable: false),
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
                        principalColumn: "RoomId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Abouts",
                columns: new[] { "AboutId", "AboutDate", "AboutDescription", "AboutImage", "AboutName" },
                values: new object[,]
                {
                    { 1, new DateTime(2023, 2, 12, 17, 30, 16, 512, DateTimeKind.Local).AddTicks(7755), "10 larca oteli tercihlerinize göre filtreleyerek saniyeler içinde size en uygun otelleri bulabilirsiniz", "https://cdn.enuygun.com/otel/v-083f8/static/images/icons/option.svg", "Sayısız Seçenek" },
                    { 2, new DateTime(2023, 2, 12, 17, 30, 16, 512, DateTimeKind.Local).AddTicks(7768), "Kafanızı karıştıran fiyat ve hizmet seçenekleri arasında kaybolmayın, tercihlerinizi belirleyip size en uygun otelde odanızı hemen ayırtın.", "https://cdn.enuygun.com/otel/v-083f8/static/images/icons/location.svg", "Uygun Oteller" },
                    { 3, new DateTime(2023, 2, 12, 17, 30, 16, 512, DateTimeKind.Local).AddTicks(7769), "Enuygun sayesinde aradığınız oteli bulmak için sadece birkaç saniyeye ihtiyacınız var.", "https://cdn.enuygun.com/otel/v-083f8/static/images/icons/fast-easy.svg", "Hızlı Ve Kolay" },
                    { 4, new DateTime(2023, 2, 12, 17, 30, 16, 512, DateTimeKind.Local).AddTicks(7770), "Tüm ödeme işleriniz, dünyanın önde gelen güvenlik sertifikası şirketi DigiCert koruması altındadır.", "https://cdn.enuygun.com/otel/v-083f8/static/images/icons/trust.svg", "Güvenle Alın" }
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
                columns: new[] { "HotelId", "CategoryId", "DegreId", "HotelImage", "HotelLocation", "HotelName", "HotelPrice" },
                values: new object[,]
                {
                    { 1, 9, 1, "https://cdn3.enuygun.com/media/lib/1x250/uploads/image/green-garden-resort-hotel-antalya-genel-38176775.jpg", "Obagöl Mevkii. Obaçay Cad., 2. Sk., 07460 Alanya/Antalya", "Green Garden Resort Hotel", 21318m },
                    { 2, 9, 1, "https://cdn3.enuygun.com/media/lib/1x250/uploads/image/susesi-luxury-resort-antalya-genel-39097853.jpg", "İskele Mevkii, 07450 Belek/Serik/Antalya", "Susesi Luxury Resort   ", 40475m },
                    { 3, 9, 4, "https://cdn3.enuygun.com/media/lib/1x250/uploads/image/buyuk-anadolu-girne-hotel-kibris-genel-38526922.jpg", "Girne/Kuzey Kıbrıs Türk Cumhuriyeti", "Büyük Anadolu Girne Hotel", 8356m }
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
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true,
                filter: "[NormalizedUserName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_Comments_HotelId",
                table: "Comments",
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
                name: "IX_Hotels_DegreId",
                table: "Hotels",
                column: "DegreId");

            migrationBuilder.CreateIndex(
                name: "IX_Quentions_HotelId",
                table: "Quentions",
                column: "HotelId");

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
                name: "HotelDetails");

            migrationBuilder.DropTable(
                name: "Quentions");

            migrationBuilder.DropTable(
                name: "Reservations");

            migrationBuilder.DropTable(
                name: "RoomDetails");

            migrationBuilder.DropTable(
                name: "AspNetRoles");

            migrationBuilder.DropTable(
                name: "AspNetUsers");

            migrationBuilder.DropTable(
                name: "Rooms");

            migrationBuilder.DropTable(
                name: "Hotels");

            migrationBuilder.DropTable(
                name: "Categories");

            migrationBuilder.DropTable(
                name: "Degres");
        }
    }
}
