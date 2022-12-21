# Programming Exercise

## Brief

A module is required to flatten nested data structures into a single object with keys delimited by a full stop (.).

- Input should be a complex type, raising an exception when this isn’t the case.
- Think carefully about any error handling that may be required.
- Unit tests should be produced to ensure all functionality works as expected.

You can submit your solution in a language of your choice.

We are looking to understand your approach to solving this problem as much as the actual technical solution. Add comments to your code to help us understand your thinking.

Googling syntax is allowed, googling solutions is not.

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
## Submitting your solution

Please commit your solution within the time frame given to you, even if your solution is not complete. We will be interested in seeing how you approached the problem.

## Extra credit

If you're in the mood for showboating, please feel free to show us what else you can do. E.g. you could automate tests for your solution.


