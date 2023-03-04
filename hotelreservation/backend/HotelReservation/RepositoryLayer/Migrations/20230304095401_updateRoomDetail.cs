using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RepositoryLayer.Migrations
{
    /// <inheritdoc />
    public partial class updateRoomDetail : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "NumberDate",
                table: "RoomDetails");

            migrationBuilder.DropColumn(
                name: "NumberPeople",
                table: "RoomDetails");

            migrationBuilder.AddColumn<int>(
                name: "NumberPeople",
                table: "Reservations",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.UpdateData(
                table: "Abouts",
                keyColumn: "AboutId",
                keyValue: 1,
                column: "AboutDate",
                value: new DateTime(2023, 3, 4, 12, 54, 1, 132, DateTimeKind.Local).AddTicks(5502));

            migrationBuilder.UpdateData(
                table: "Abouts",
                keyColumn: "AboutId",
                keyValue: 2,
                column: "AboutDate",
                value: new DateTime(2023, 3, 4, 12, 54, 1, 132, DateTimeKind.Local).AddTicks(5540));

            migrationBuilder.UpdateData(
                table: "Abouts",
                keyColumn: "AboutId",
                keyValue: 3,
                column: "AboutDate",
                value: new DateTime(2023, 3, 4, 12, 54, 1, 132, DateTimeKind.Local).AddTicks(5541));

            migrationBuilder.UpdateData(
                table: "Abouts",
                keyColumn: "AboutId",
                keyValue: 4,
                column: "AboutDate",
                value: new DateTime(2023, 3, 4, 12, 54, 1, 132, DateTimeKind.Local).AddTicks(5542));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "NumberPeople",
                table: "Reservations");

            migrationBuilder.AddColumn<int>(
                name: "NumberDate",
                table: "RoomDetails",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "NumberPeople",
                table: "RoomDetails",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.UpdateData(
                table: "Abouts",
                keyColumn: "AboutId",
                keyValue: 1,
                column: "AboutDate",
                value: new DateTime(2023, 2, 27, 12, 56, 53, 313, DateTimeKind.Local).AddTicks(9515));

            migrationBuilder.UpdateData(
                table: "Abouts",
                keyColumn: "AboutId",
                keyValue: 2,
                column: "AboutDate",
                value: new DateTime(2023, 2, 27, 12, 56, 53, 313, DateTimeKind.Local).AddTicks(9531));

            migrationBuilder.UpdateData(
                table: "Abouts",
                keyColumn: "AboutId",
                keyValue: 3,
                column: "AboutDate",
                value: new DateTime(2023, 2, 27, 12, 56, 53, 313, DateTimeKind.Local).AddTicks(9533));

            migrationBuilder.UpdateData(
                table: "Abouts",
                keyColumn: "AboutId",
                keyValue: 4,
                column: "AboutDate",
                value: new DateTime(2023, 2, 27, 12, 56, 53, 313, DateTimeKind.Local).AddTicks(9534));
        }
    }
}
