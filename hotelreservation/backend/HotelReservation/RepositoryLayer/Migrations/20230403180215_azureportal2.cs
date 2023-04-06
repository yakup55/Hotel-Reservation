using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RepositoryLayer.Migrations
{
    /// <inheritdoc />
    public partial class azureportal2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
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

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Abouts",
                keyColumn: "AboutId",
                keyValue: 1,
                column: "AboutDate",
                value: new DateTime(2023, 3, 25, 10, 22, 13, 327, DateTimeKind.Local).AddTicks(6280));

            migrationBuilder.UpdateData(
                table: "Abouts",
                keyColumn: "AboutId",
                keyValue: 2,
                column: "AboutDate",
                value: new DateTime(2023, 3, 25, 10, 22, 13, 327, DateTimeKind.Local).AddTicks(6291));

            migrationBuilder.UpdateData(
                table: "Abouts",
                keyColumn: "AboutId",
                keyValue: 3,
                column: "AboutDate",
                value: new DateTime(2023, 3, 25, 10, 22, 13, 327, DateTimeKind.Local).AddTicks(6292));

            migrationBuilder.UpdateData(
                table: "Abouts",
                keyColumn: "AboutId",
                keyValue: 4,
                column: "AboutDate",
                value: new DateTime(2023, 3, 25, 10, 22, 13, 327, DateTimeKind.Local).AddTicks(6293));
        }
    }
}
