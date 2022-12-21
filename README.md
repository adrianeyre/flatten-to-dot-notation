# Programming Exercise

## Brief

A module is required to flatten nested data structures into a single object with keys delimited by a full stop (.).

- Input should be a complex type, raising an exception when this isn’t the case.
- Think carefully about any error handling that may be required.
- Unit tests should be produced to ensure all functionality works as expected.

## Example Input 
```json
{
    "some": {
        "nested": "data",
        "object": {
            "with": {
                "nested": "data"
            }
        },
        "another": [
            {
              "object": "data"
            }
        ],
        "empty": []
    }
}
```
## Example Output
```json
{
    "some.nested": "data",
    "some.object.with.nested": "data",
    "some.another[0].object": "data"
}
```
