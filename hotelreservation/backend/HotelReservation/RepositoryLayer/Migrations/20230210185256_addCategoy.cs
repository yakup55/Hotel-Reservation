using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace RepositoryLayer.Migrations
{
    /// <inheritdoc />
    public partial class addCategoy : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Categories",
                keyColumn: "CategoryId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Categories",
                keyColumn: "CategoryId",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Categories",
                keyColumn: "CategoryId",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Categories",
                keyColumn: "CategoryId",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Categories",
                keyColumn: "CategoryId",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Categories",
                keyColumn: "CategoryId",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Categories",
                keyColumn: "CategoryId",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Categories",
                keyColumn: "CategoryId",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Categories",
                keyColumn: "CategoryId",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "Categories",
                keyColumn: "CategoryId",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "Categories",
                keyColumn: "CategoryId",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "Categories",
                keyColumn: "CategoryId",
                keyValue: 12);

            migrationBuilder.DeleteData(
                table: "Categories",
                keyColumn: "CategoryId",
                keyValue: 13);
        }
    }
}
