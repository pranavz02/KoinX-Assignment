# KoinX Assignment - Backend Developer Intern

## Description

This is the backend code for the KoinX Backend Developer Intern assignment.
The assignment is live on Render.
https://koinx-assignment-hdm2.onrender.com 

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/pranavz02/KoinX-Assignment.git
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root of your project and add the following:

    ```env
    MONGODB_URI=
    COIN_LIST_API=
    PRICE_API=
    PUBLIC_TREASURY_API=
    ```

4. **Start the server:**

    ```bash
    npm start
    ```

## Usage

The API is now running at `http://localhost:3000`.

## API Reference

#### Get all cryptocurrencies
Fetches all available cryptocurrencies from an Coingecko's API and updates the database.
```http
  GET /api/coins
```

#### Cryptocurrency conversion
```http
  POST /api/convert-coin
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `fromCurrency`| `string` | **Required**. From Currency |
| `toCurrency` | `string` | **Required**. To Currency |
| `date` | `string` | **Required**. Format: DD-MM-YYYY |

#### List comapnies holding a cryptocurrency

```http
  POST /api/company-list
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `currency` | `string` | **Required**. Name of currency |


