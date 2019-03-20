# Design Guidlines v.0.1.0

## Table of Contents

1. [8px Grid](#1-8px-grid)
2. [Icon Sizing](#2-icon-sizing)
	1. [Icon Types](#2i-icon-types)
	2. [Naming Convention Scheme](#2i-naming-convention-scheme)
	3. [Smallest Size Limit](#2iii-smallest-size-limit)
3. [Templates](#3-templates)
	1. [Icon Sets](#3i-icon-sets)
4. [Sub Icons](#4-sub-icons)
	1. [Decending and Ascending](#4i-decending-and-ascending)
5. [SVGO Optimization](#5-svgo-optimization)

### 1. 8px Grid

We follow the Google Material Design principles and as such find the 8px grid to be extremely versatile and idealy suited for working with web graphics, specificaly icons. You can find a setup guide for your application under the templates folder. All icons will be built to an 8px grid.

### 2. Icon Sizing

Each `iconType` will have a size requirment For Exp: `icon: 24px`. We have several different category types for the icons we support. Each of which can be seen in section 2.1. Because each of these has a different use they each have unique requirments specifc just for them. For more intricate and advanced icons 24px may be too small. Check the Readme in each iocnType folder for specific guidlines for that type.

To ensure proper icon placment it is a standard convention to include an empty fill, transparent background block the full size of the template. This should be removed from the final exported svg icon code prior to submitting for final review.

All of the templates include this layer by default for you and we have tests that will automatically check for it in the final svg pull request. The acception here is the template for sets. By default it only contains 9 icons in a grid. Make sure to duplicate the entire folder when adding a new icon to ensure that this transparent layer is present.

> NOTE: you can tell that its not present if the svg width and height do not match the required size. For Exp: `width="24px" height="24px"` for a standard icon.

For example if you are designing to a 24px size it will ensure your icon is at the center of block with `24x24` pixel dimensions in the browser.

#### 2.i Icon Types
| Icon Type  | Naming Convention | Exp |
| ------------- | ------------- | ------------- |
| Icon  | *n/a* | `user-shield-check-outline-set1` |
| Imageset  | s  | `s-forum-outline-set1`|
| Forum Image  | i  | `i-support-color-set1` |
| Brand Icon  | b  | `b-facebook-solid-set1` |
| Rank Image  | r  | `r-admin-twotone-set1` |
| Emoji  | e  | `e-poo-color-set1` |

#### 2.ii Naming Convention Scheme

| Icon Type(Categorie) | Icon Name | Icon Theme | Icon Set |
|----------------------|------------------------|------------|----------|
| `n/a` `i` `b` `r` `e` | user-shield-check | `solid` `outline` `twotone` `color` `etc...` | custom name for set of icons given by artist |

#### 2.iii Smallest Size Limit

All spacing, gaps, offsets, outlines, etc will be no smaller than 2px to ensure proper rendring at small sizes. When working with icons that are meant to scale it is common to see smaller elements reduced in size as they are scaled down. To avoid inadvertant render issues, you should ensure that all outlines, gaps, finer details are no less than 2px.

### 3. Templates

While we prefer to use sketch to design all of our icons, we understnad that not everyone has access to use sketch or may prefer a different tool. To this end we try to maintian templates for all the popular tools out there. You can find more info in the Readme in the templates folder.

Each icon will be developed using one of the templates provided and saved in a state ready to export. The filename should be the same as the final name for the icon as well as the containing folder in the file itself

#### 3.i Icon Sets

The exception to the rule is if you are providing a new set of icons. To facilitate this its far easier to maintain a single file which can easily export all the icons. The naming of each icons folder in the file must match each icons final filename. However the name of the template file should follow the following convention `type-set`

### 4. Sub Icons

To facilitate better quality across icons as it is common practice to have sub icons, the use of a standard size for all of them will be used in the set. We reccommend using **8px** but that is **not** a requirment. The only requirment is that it be **no less** than **2px** and be **evenly divisable** by **2px**.

#### 4.i Decending and Ascending

No sub icon will decend or ascend above/below main icon. The placement of a sub icon can convey a differnt meaning. Centered may symbolize tpye, Left aligned may symbolize an action or a status, etc... To that end the sub icon should not be placed lower than the bottom most pixel or higher than the top most pixel of the main icon.

### 5. SVGO Optimization

All icons should be run through SVGO using our provided options to optimize for the best quality and rendering. Every graphic software is different and handles vectors and svg conversion differently. It is this reason that we need to run everything through SVGO to optimize the final file by.
- Remove all the useless stuff that your editor adds
- Convert all shapes to high performant paths
- Remove unnessecary grouping elements
- Remove all comments and unnessecary extra nodes
- Remove all irrelavent xml and doctype stuff
- Compress the paths to help further reduce the file size.
- and more...

You can find the required options and a guide to do this under the templates/readme since some editors have plugins to automatically do this and some do not. You may have to manually perform this task or consider installing and running it from the command line.
