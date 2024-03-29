﻿using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RepositoryLayer.Migrations
{
    /// <inheritdoc />
    public partial class initial2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
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

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Abouts",
                keyColumn: "AboutId",
                keyValue: 1,
                column: "AboutDate",
                value: new DateTime(2023, 3, 24, 16, 40, 49, 112, DateTimeKind.Local).AddTicks(6882));

            migrationBuilder.UpdateData(
                table: "Abouts",
                keyColumn: "AboutId",
                keyValue: 2,
                column: "AboutDate",
                value: new DateTime(2023, 3, 24, 16, 40, 49, 112, DateTimeKind.Local).AddTicks(6898));

            migrationBuilder.UpdateData(
                table: "Abouts",
                keyColumn: "AboutId",
                keyValue: 3,
                column: "AboutDate",
                value: new DateTime(2023, 3, 24, 16, 40, 49, 112, DateTimeKind.Local).AddTicks(6899));

            migrationBuilder.UpdateData(
                table: "Abouts",
                keyColumn: "AboutId",
                keyValue: 4,
                column: "AboutDate",
                value: new DateTime(2023, 3, 24, 16, 40, 49, 112, DateTimeKind.Local).AddTicks(6900));
        }
    }
}
