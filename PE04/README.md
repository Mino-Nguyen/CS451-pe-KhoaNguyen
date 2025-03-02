Input

An array of six user profiles were created, with data about image, name, occupation, description, and a true false flag for the big and small state of the card.

Process

The App keep the state of the profile data and control when the profile expand and collapse. Each ProfileCard component is wrapped in a TouchableHighlight that triggers an onPress event. When you press a card it will change its state with the immutability-helper library, updating the size. The layout is managed using Flexbox, arranging the profile in a 2x3 grid.

Output

The application displays six profile cards arranged in a grid layout. Each card can be expanded to full size or collapsed into a thumbnail.

