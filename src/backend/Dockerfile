#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

#Set the base image to the .NET 10 SDK
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /app

# Copy the project files and restore dependencies
COPY hilfreichAPI/hilfreichAPI.csproj .
RUN dotnet restore

# Copy the remaining project files
COPY hilfreichAPI .

CMD ["sleep", "infinity"]
