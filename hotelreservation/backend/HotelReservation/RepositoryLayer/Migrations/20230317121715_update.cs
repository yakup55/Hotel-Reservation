using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RepositoryLayer.Migrations
{
    /// <inheritdoc />
    public partial class update : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TravelContent_TravelWritings_TravelWritingId",
                table: "TravelContent");

            migrationBuilder.DropPrimaryKey(
                name: "PK_TravelContent",
                table: "TravelContent");

            migrationBuilder.RenameTable(
                name: "TravelContent",
                newName: "TravelContents");

            migrationBuilder.RenameIndex(
                name: "IX_TravelContent_TravelWritingId",
                table: "TravelContents",
                newName: "IX_TravelContents_TravelWritingId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_TravelContents",
                table: "TravelContents",
                column: "TravelContentId");

            migrationBuilder.UpdateData(
                table: "Abouts",
                keyColumn: "AboutId",
                keyValue: 1,
                column: "AboutDate",
                value: new DateTime(2023, 3, 17, 15, 17, 15, 413, DateTimeKind.Local).AddTicks(1138));

            migrationBuilder.UpdateData(
                table: "Abouts",
                keyColumn: "AboutId",
                keyValue: 2,
                column: "AboutDate",
                value: new DateTime(2023, 3, 17, 15, 17, 15, 413, DateTimeKind.Local).AddTicks(1150));

            migrationBuilder.UpdateData(
                table: "Abouts",
                keyColumn: "AboutId",
                keyValue: 3,
                column: "AboutDate",
                value: new DateTime(2023, 3, 17, 15, 17, 15, 413, DateTimeKind.Local).AddTicks(1151));

            migrationBuilder.UpdateData(
                table: "Abouts",
                keyColumn: "AboutId",
                keyValue: 4,
                column: "AboutDate",
                value: new DateTime(2023, 3, 17, 15, 17, 15, 413, DateTimeKind.Local).AddTicks(1152));

            migrationBuilder.AddForeignKey(
                name: "FK_TravelContents_TravelWritings_TravelWritingId",
                table: "TravelContents",
                column: "TravelWritingId",
                principalTable: "TravelWritings",
                principalColumn: "TravelWritingId",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TravelContents_TravelWritings_TravelWritingId",
                table: "TravelContents");

            migrationBuilder.DropPrimaryKey(
                name: "PK_TravelContents",
                table: "TravelContents");

            migrationBuilder.RenameTable(
                name: "TravelContents",
                newName: "TravelContent");

            migrationBuilder.RenameIndex(
                name: "IX_TravelContents_TravelWritingId",
                table: "TravelContent",
                newName: "IX_TravelContent_TravelWritingId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_TravelContent",
                table: "TravelContent",
                column: "TravelContentId");

            migrationBuilder.UpdateData(
                table: "Abouts",
                keyColumn: "AboutId",
                keyValue: 1,
                column: "AboutDate",
                value: new DateTime(2023, 3, 16, 20, 28, 40, 429, DateTimeKind.Local).AddTicks(7029));

            migrationBuilder.UpdateData(
                table: "Abouts",
                keyColumn: "AboutId",
                keyValue: 2,
                column: "AboutDate",
                value: new DateTime(2023, 3, 16, 20, 28, 40, 429, DateTimeKind.Local).AddTicks(7041));

            migrationBuilder.UpdateData(
                table: "Abouts",
                keyColumn: "AboutId",
                keyValue: 3,
                column: "AboutDate",
                value: new DateTime(2023, 3, 16, 20, 28, 40, 429, DateTimeKind.Local).AddTicks(7043));

            migrationBuilder.UpdateData(
                table: "Abouts",
                keyColumn: "AboutId",
                keyValue: 4,
                column: "AboutDate",
                value: new DateTime(2023, 3, 16, 20, 28, 40, 429, DateTimeKind.Local).AddTicks(7044));

            migrationBuilder.AddForeignKey(
                name: "FK_TravelContent_TravelWritings_TravelWritingId",
                table: "TravelContent",
                column: "TravelWritingId",
                principalTable: "TravelWritings",
                principalColumn: "TravelWritingId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
