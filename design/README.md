# Design Guidlines v.0.1.0

## Table of Contents

- [1.0](#10) All icons will be built to an 8px grid.
- [2.0](#20) Each `iconType` will have a size requirment For Exp: `icon: 24px`
	* This may be two small for more intricate and advanced icons. Check the Readme for each iocnType folder for specific guidlines for that type.
	* [2.1](#21-icon-types) Icon Types
	* [2.2](#22-naming-convention-scheme)
- [3.0](#30) All icons will be designed using one of the provided templates. 
	* [3.1](#31) Icon sets may be developed in a single file (using icon set templates)
- [4.0](#40) Sub icons for each set will be consistently sized and placed. (size: 8px Recommended)
	* [4.1](#41) No sub icon wil decend or rise above/below main icon.
- [5.0](#50) All spacing, gaps, offsets, outlines, etc will be no smaller than 2px to ensure proper rendring at small sizes.

### 1.0

We follow the Google Material Design principles and as such find the 8px grid to be extremely versatile and idealy suited for working with web graphics, specificaly icons. You can find a setup guide for your application under the templates folder.

<span class="btn-danger">test</span>

### 2.0

We have several different category types for the icons we support. Each of which can be seen below. Because each of these has a different use they each have unique requirments specifc just to them. One of these is a different size requirment. To ensure proper icon placment it is a standard convention to include an empty filled, transparent background the full size of the template. This should be removed from the final exported svg icon code. 

All of the templates include this layer by default for you and we have tests that will automated checks for it in the final svg pull request. The acception here is the template for sets. by default it only contains 9 icons in a grid. Make sure to duplicate an entire folder when adding a new icon to ensure that this transparent layer is present.

> NOTE: you can tell that its not present if the svg width and height do not match the required size. For Exp: `width="24px" height="24px"` for a standard icon.

For example if you are designing to a 24px size it will ensure your icon is at the center of block with 24x24 pixel dimensions in the browser.

#### 2.1 Icon Types
| Icon Type  | Naming Convention | Exp |
| ------------- | ------------- | ------------- |
| Icon  | *n/a* | `user-shield-check-outline-set1` |
| Imageset  | s  | `s-forum-outline-set1`|
| Forum Image  | i  | `i-support-color-set1` |
| Brand Icon  | b  | `b-facebook-solid-set1` |
| Rank Image  | r  | `r-admin-twotone-set1` |
| Emoji  | e  | `e-poo-color-set1` |

#### 2.2 Naming Convetion Scheme

| Icon Type(Categorie) | Icon Name | Icon Theme | Icon Set |
|----------------------|------------------------|------------|----------|
| `n/a` `i` `b` `r` `e` | user-shield-check | `solid` `outline` `twotone` `color` `etc...` | custom name for set of icons given by artist |

### 3.0

While we prefer to use shetch to design all of our icons, we understnad that not everyone has access to use sketch or may prefer a different tool. To this end we tray to maintian templates for all the popular tools out there. You can find more info in the Readme for the templates folder.

Each icon should be developed using on of the templates provided and saved in a state ready to export. The filename should be the same as the final name for the icon as well as the containing folder in the file itself

#### 3.1

The exception to the rule is if you are providing a new set of icons. To facilitate this its far easier to maintain a single file which can easily export all the icons. The naming of each icons folder in the file must match each icons final filename. However the name of the template file should follow the following convention `type-set`

### 4.0

To facilitate better quality across icons as its common practice to have sub icons, the use of a standard size for all of them used in the set. We reccommend using 8px but that is not a requirment. The only requirment is that it be no less than 2px and be evenly divisable by 2px.

#### 4.1

The placement of a sub icon can convey a differnt meaning. in the center may symbolize a tpye, to the side may symbolize an action or a status, etc... To that end the sub icon should not be placed lower than the bottom most pixel or hight than the top most pixel of the main icon.

### 5.0

When working with icons that are meant to scale it is common to see smaller elements reduced in size as they are scaled down. To avoid inadvertant render issues, you should ensure that all outlines, gaps, finer details are no less than 2px.
