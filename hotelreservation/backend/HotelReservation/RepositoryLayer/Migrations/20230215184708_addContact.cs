using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RepositoryLayer.Migrations
{
    /// <inheritdoc />
    public partial class addContact : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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

            migrationBuilder.UpdateData(
                table: "Abouts",
                keyColumn: "AboutId",
                keyValue: 1,
                column: "AboutDate",
                value: new DateTime(2023, 2, 15, 21, 47, 8, 59, DateTimeKind.Local).AddTicks(5861));

            migrationBuilder.UpdateData(
                table: "Abouts",
                keyColumn: "AboutId",
                keyValue: 2,
                column: "AboutDate",
                value: new DateTime(2023, 2, 15, 21, 47, 8, 59, DateTimeKind.Local).AddTicks(5881));

            migrationBuilder.UpdateData(
                table: "Abouts",
                keyColumn: "AboutId",
                keyValue: 3,
                column: "AboutDate",
                value: new DateTime(2023, 2, 15, 21, 47, 8, 59, DateTimeKind.Local).AddTicks(5883));

            migrationBuilder.UpdateData(
                table: "Abouts",
                keyColumn: "AboutId",
                keyValue: 4,
                column: "AboutDate",
                value: new DateTime(2023, 2, 15, 21, 47, 8, 59, DateTimeKind.Local).AddTicks(5883));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Contacts");

            migrationBuilder.UpdateData(
                table: "Abouts",
                keyColumn: "AboutId",
                keyValue: 1,
                column: "AboutDate",
                value: new DateTime(2023, 2, 15, 14, 0, 46, 953, DateTimeKind.Local).AddTicks(7439));

            migrationBuilder.UpdateData(
                table: "Abouts",
                keyColumn: "AboutId",
                keyValue: 2,
                column: "AboutDate",
                value: new DateTime(2023, 2, 15, 14, 0, 46, 953, DateTimeKind.Local).AddTicks(7451));

            migrationBuilder.UpdateData(
                table: "Abouts",
                keyColumn: "AboutId",
                keyValue: 3,
                column: "AboutDate",
                value: new DateTime(2023, 2, 15, 14, 0, 46, 953, DateTimeKind.Local).AddTicks(7452));

            migrationBuilder.UpdateData(
                table: "Abouts",
                keyColumn: "AboutId",
                keyValue: 4,
                column: "AboutDate",
                value: new DateTime(2023, 2, 15, 14, 0, 46, 953, DateTimeKind.Local).AddTicks(7453));
        }
    }
}
