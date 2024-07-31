# TurzoBot API

This repository contains the code for the TurzoBot API, which interacts with a Google Sheets document to fetch and update quotes. The API ensures that the least-used quotes are returned and keeps track of their usage.

## Author

Dana Hooshmand  
[hooshmand.net](https://hooshmand.net)

## Overview

The TurzoBot API is designed to:

*   Fetch the least-used quote from a Google Sheets document.
*   Update the usage count of the fetched quote.
*   Log the fetched quote along with the timestamp.

## Google Sheets Setup

The API interacts with a Google Sheets document identified by the ID: `1nQG27jGfE7vlcezMyHUBK5zfwHe4e5O1JfvAP54l2_M`. Ensure that this sheet is set up with the following structure:

### Sheet 1 (Quotes)

*   Column A: Quote Text
*   Column B: Usage Counter
*   Column C: Unique Identifier

### Sheet 2 (Logs)

*   Column A: Timestamp
*   Column B: Logged Quote

## Functions

### `doGet(e)`

Handles GET requests to the API. It performs the following steps:

1.  Fetches the input parameter (if any).
2.  Retrieves all rows from the first sheet.
3.  Identifies the least-used quotes.
4.  Randomly selects one of the least-used quotes.
5.  Updates the usage counter for the selected quote.
6.  Logs the fetched quote.
7.  Returns the fetched quote and the total usage count in JSON format.

### `logLine(text)`

Logs the provided text (quote) along with the current timestamp in the second sheet.

### `doPost(e)`

Handles POST requests to the API. Currently, it returns `true` without performing any operations.

### `getSum(total, num)`

Helper function to sum up numbers, used to calculate the total usage count.

## Usage

### GET Request

To fetch a quote, send a GET request to the API endpoint. The response will be in JSON format containing the fetched quote and the total usage count.

Example response:

```json
{
  "input": "exampleInput",
  "botText": "This is a sample quote.",
  "counter": 42
}
```

### POST Request

Currently, the POST request handler (`doPost`) does not perform any operations and simply returns `true`.

## Logging

Each time a quote is fetched, it is logged in the second sheet along with the timestamp.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

- - -

For any questions or issues, please contact Dana Hooshmand at [hooshmand.net](https://hooshmand.net).

Tokens used in calling openai-gpt-4o: 1613 prompt tokens, 570 completion tokens
