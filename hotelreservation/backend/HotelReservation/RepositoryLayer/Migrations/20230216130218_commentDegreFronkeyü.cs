using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RepositoryLayer.Migrations
{
    /// <inheritdoc />
    public partial class commentDegreFronkeyü : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "DegreId",
                table: "Comments",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.UpdateData(
                table: "Abouts",
                keyColumn: "AboutId",
                keyValue: 1,
                column: "AboutDate",
                value: new DateTime(2023, 2, 16, 16, 2, 17, 988, DateTimeKind.Local).AddTicks(6298));

            migrationBuilder.UpdateData(
                table: "Abouts",
                keyColumn: "AboutId",
                keyValue: 2,
                column: "AboutDate",
                value: new DateTime(2023, 2, 16, 16, 2, 17, 988, DateTimeKind.Local).AddTicks(6317));

            migrationBuilder.UpdateData(
                table: "Abouts",
                keyColumn: "AboutId",
                keyValue: 3,
                column: "AboutDate",
                value: new DateTime(2023, 2, 16, 16, 2, 17, 988, DateTimeKind.Local).AddTicks(6319));

            migrationBuilder.UpdateData(
                table: "Abouts",
                keyColumn: "AboutId",
                keyValue: 4,
                column: "AboutDate",
                value: new DateTime(2023, 2, 16, 16, 2, 17, 988, DateTimeKind.Local).AddTicks(6320));

            migrationBuilder.CreateIndex(
                name: "IX_Comments_DegreId",
                table: "Comments",
                column: "DegreId");

            migrationBuilder.AddForeignKey(
                name: "FK_Comments_Degres_DegreId",
                table: "Comments",
                column: "DegreId",
                principalTable: "Degres",
                principalColumn: "DegreId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Comments_Degres_DegreId",
                table: "Comments");

            migrationBuilder.DropIndex(
                name: "IX_Comments_DegreId",
                table: "Comments");

            migrationBuilder.DropColumn(
                name: "DegreId",
                table: "Comments");

            migrationBuilder.UpdateData(
                table: "Abouts",
                keyColumn: "AboutId",
                keyValue: 1,
                column: "AboutDate",
                value: new DateTime(2023, 2, 16, 14, 32, 11, 541, DateTimeKind.Local).AddTicks(4378));

            migrationBuilder.UpdateData(
                table: "Abouts",
                keyColumn: "AboutId",
                keyValue: 2,
                column: "AboutDate",
                value: new DateTime(2023, 2, 16, 14, 32, 11, 541, DateTimeKind.Local).AddTicks(4394));

            migrationBuilder.UpdateData(
                table: "Abouts",
                keyColumn: "AboutId",
                keyValue: 3,
                column: "AboutDate",
                value: new DateTime(2023, 2, 16, 14, 32, 11, 541, DateTimeKind.Local).AddTicks(4395));

            migrationBuilder.UpdateData(
                table: "Abouts",
                keyColumn: "AboutId",
                keyValue: 4,
                column: "AboutDate",
                value: new DateTime(2023, 2, 16, 14, 32, 11, 541, DateTimeKind.Local).AddTicks(4397));
        }
    }
}
