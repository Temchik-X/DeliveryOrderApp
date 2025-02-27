﻿// <auto-generated />
using System;
using DeliveryOrderAPI.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace DeliveryOrderAPI.Migrations
{
    [DbContext(typeof(DeliveryContext))]
    partial class DeliveryContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "9.0.1");

            modelBuilder.Entity("DeliveryOrderAPI.Models.Order", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<double>("CargoWeight")
                        .HasColumnType("REAL");

                    b.Property<string>("OrderNumber")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("PickupDate")
                        .HasColumnType("TEXT");

                    b.Property<string>("RecipientAddress")
                        .HasColumnType("TEXT");

                    b.Property<string>("RecipientCity")
                        .HasColumnType("TEXT");

                    b.Property<string>("SenderAddress")
                        .HasColumnType("TEXT");

                    b.Property<string>("SenderCity")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Orders");
                });
#pragma warning restore 612, 618
        }
    }
}
