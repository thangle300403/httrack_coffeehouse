## Project Description

`cfh-nest` is a **NestJS + EJS + MySQL** web application that recreates a coffee shop homepage experience (inspired by The Coffee House).

This project uses **HTTrack** to download the original Coffee House frontend layout/assets as a static template, then converts it into an **EJS-based NestJS view** and replaces hardcoded product/category content with **dynamic data from MySQL**.

## What This Project Does

- Uses an HTTrack-cloned Coffee House UI as the base frontend template
- Integrates that template into a NestJS project with EJS rendering
- Loads categories and products from MySQL via TypeORM
- Renders the homepage with server-side data
- Dynamically updates featured products by category using client-side JavaScript (`fetch`)
- Serves static assets (JS, images, etc.) from the `public` folder

## Tech Stack

- **Backend:** NestJS (Node.js, TypeScript)
- **Template Engine:** EJS
- **Database:** MySQL
- **ORM:** TypeORM
- **Frontend:** Vanilla JavaScript
- **Template Source:** HTTrack (for cloning the original UI structure/assets)

## Main Routes

- `GET /` - Render homepage with categories and initial featured products
- `GET /categories` - Render homepage with categories (same view)
- `GET /products/category/:id` - Return products by category as JSON

## Notes

- The project keeps the original UI/markup style from the HTTrack template, but the featured product data is injected from the local database.
- TypeORM `synchronize` is disabled (`false`), so the MySQL schema must exist beforehand.
- Default local database config points to MySQL database: `cfh`.

## Run Locally

```bash
npm install
npm run start:dev
