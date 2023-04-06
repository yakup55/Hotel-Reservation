using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RepositoryLayer.Migrations
{
    /// <inheritdoc />
    public partial class azureportal3 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Abouts",
                keyColumn: "AboutId",
                keyValue: 1,
                column: "AboutDate",
                value: new DateTime(2023, 4, 3, 21, 10, 33, 597, DateTimeKind.Local).AddTicks(911));

            migrationBuilder.UpdateData(
                table: "Abouts",
                keyColumn: "AboutId",
                keyValue: 2,
                column: "AboutDate",
                value: new DateTime(2023, 4, 3, 21, 10, 33, 597, DateTimeKind.Local).AddTicks(922));

            migrationBuilder.UpdateData(
                table: "Abouts",
                keyColumn: "AboutId",
                keyValue: 3,
                column: "AboutDate",
                value: new DateTime(2023, 4, 3, 21, 10, 33, 597, DateTimeKind.Local).AddTicks(923));

            migrationBuilder.UpdateData(
                table: "Abouts",
                keyColumn: "AboutId",
                keyValue: 4,
                column: "AboutDate",
                value: new DateTime(2023, 4, 3, 21, 10, 33, 597, DateTimeKind.Local).AddTicks(924));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Abouts",
                keyColumn: "AboutId",
                keyValue: 1,
                column: "AboutDate",
                value: new DateTime(2023, 4, 3, 21, 2, 14, 725, DateTimeKind.Local).AddTicks(3701));

            migrationBuilder.UpdateData(
                table: "Abouts",
                keyColumn: "AboutId",
                keyValue: 2,
                column: "AboutDate",
                value: new DateTime(2023, 4, 3, 21, 2, 14, 725, DateTimeKind.Local).AddTicks(3713));

            migrationBuilder.UpdateData(
                table: "Abouts",
                keyColumn: "AboutId",
                keyValue: 3,
                column: "AboutDate",
                value: new DateTime(2023, 4, 3, 21, 2, 14, 725, DateTimeKind.Local).AddTicks(3715));

            migrationBuilder.UpdateData(
                table: "Abouts",
                keyColumn: "AboutId",
                keyValue: 4,
                column: "AboutDate",
                value: new DateTime(2023, 4, 3, 21, 2, 14, 725, DateTimeKind.Local).AddTicks(3716));
        }
    }
}
