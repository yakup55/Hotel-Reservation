using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace RepositoryLayer.Migrations
{
    /// <inheritdoc />
    public partial class addabout : Migration
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

            migrationBuilder.InsertData(
                table: "Abouts",
                columns: new[] { "AboutId", "AboutDate", "AboutDescription", "AboutImage", "AboutName" },
                values: new object[,]
                {
                    { 1, new DateTime(2023, 2, 11, 23, 40, 49, 334, DateTimeKind.Local).AddTicks(477), "10 larca oteli tercihlerinize göre filtreleyerek saniyeler içinde size en uygun otelleri bulabilirsiniz", "https://cdn.enuygun.com/otel/v-083f8/static/images/icons/option.svg", "Sayısız Seçenek" },
                    { 2, new DateTime(2023, 2, 11, 23, 40, 49, 334, DateTimeKind.Local).AddTicks(489), "Kafanızı karıştıran fiyat ve hizmet seçenekleri arasında kaybolmayın, tercihlerinizi belirleyip size en uygun otelde odanızı hemen ayırtın.", "https://cdn.enuygun.com/otel/v-083f8/static/images/icons/option.svg", "Uygun Oteller" },
                    { 3, new DateTime(2023, 2, 11, 23, 40, 49, 334, DateTimeKind.Local).AddTicks(490), "Enuygun sayesinde aradığınız oteli bulmak için sadece birkaç saniyeye ihtiyacınız var.", "https://cdn.enuygun.com/otel/v-083f8/static/images/icons/option.svg", "Hızlı Ve Kolay" },
                    { 4, new DateTime(2023, 2, 11, 23, 40, 49, 334, DateTimeKind.Local).AddTicks(494), "Tüm ödeme işleriniz, dünyanın önde gelen güvenlik sertifikası şirketi DigiCert koruması altındadır.", "https://cdn.enuygun.com/otel/v-083f8/static/images/icons/option.svg", "Güvenle Alın" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Abouts");
        }
    }
}
