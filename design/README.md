# Design Guidlines v.0.1.0

## Table of Contents

1. [8px Grid](#1-8px-grid)
2. [Icon Sizing](#2-icon-sizing)
	1. [Icon Types](#2i-icon-types)
	2. [Naming Convention Scheme](#2ii-naming-convention-scheme) 
	3. [Small Size Limitations](#2iii-small-size-limitations)
3. [Templates](#3-templates)
	1. [Icon Sets](#3i-icon-sets)
4. [Sub Icons](#4-sub-icons)
	1. [Decending and Ascending](#4i-decending-and-ascending)
5. [SVGO Optimization](#5-svgo-optimization)

### 1. 8px Grid

We follow the Google Material Design principles and as such find the 8px grid to be extremely versatile and idealy suited for working with web graphics, specificaly icons. You can find a setup guide for your application under the templates folder. All icons will be built to an 8px grid.

### 2. Icon Sizing

Each `iconType` will have a size requirment For Exp: `icon: 24px`. We have several different category types for the icons we support. Each of which can be seen in section 2.1. Because each of these has a different use they each have unique requirments specifc just for them. For more intricate and advanced icons 24px may be too small. Check the Readme in each **designs/designs/iocnType** folder for specific guidlines for that type.

To ensure proper icon placment each tool has specific workflows that will need to be followed. These ensure that all the icons are centered in the provided space. In other words if your icon is 20x18 px and the tempalte is 24x24 px then the icon should be centered to the canvas and rendered out at 24x24 px. This ensures the icons are centered when rendered in the browser which is the desired normal implimentation of an icon. All of the templates by default are constructed with this in mind and there are detailed instructions provided for each to ensure you are creating them properly. Tests are automatically checking for this in the final svg pull request. At times however, for a set of icons, it may be easier for all of them to be created in the same tmeplate. Make sure to duplicate things correctly by following the provided instructions for your template/application when adding a new icon to ensure that it is properly created to the canvas and exports properly at the canvas dimensions and not the design dimensions.

> NOTE: you can tell that its not if the svg width and height do not match the required dimensions. For Exp: `width="24px" height="24px"` for a standard icon.

#### 2.i Icon Types
| Icon Type  | Prefix | Exp |
| ------------- | ------------- | ------------- |
| Icon  | `fi` | `fi:shield-check-color-shieldy` |
| Imageset  | `fi-s`  | `fi-s:shield-check-color-shieldy`|
| Forum Image  | `fi-i`  | `fi-i:shield-check-color-shieldy` |
| Brand Icon  | `fi-b`  | `fi-b:shield-check-color-shieldy` |
| Rank Image  | `fi-r`  | `fi-r:shield-check-color-shieldy` |
| Emoji  | `fi--`  | `fi-e:shield-check-color-shieldy` |

#### 2.ii Naming Convention Scheme

| Repo Refix | Type(Categorie) Prefix | Icon Name | Icon Theme | Icon Size | Icon Set |
|------------|------------------------|-----------|------------|-----------|----------|
| `fi`| `n/a` `i` `b` `r` `e` | user-shield-check | `solid` `outline` `twotone` `color` `etc...` | `lg` | custom name |

Exp:
```javascript
fi-b:Icon-Name-theme-size-set
```

#### 2.iii Small Size Limitations

Because of the smaller sizes most icons are meant to be used at, each icon should be built to a range. This means that if the design is at 24px all elements should look and fucntion given the sizing and spacing at 24px. It should also work at double the size and half the size as well. For example a stroke or outline should look the same or relatively the same at half and double the size of the icon.

With that being said different sizes of the icons can be submitted for larger sized versions if needed. If the icon is meant to be rendred or used in a situation where it may be larger than double the original size. We sugest producing a larer scale version as well. to handle naming concerns for this we append a notional size on the end of the file name scheme. To use the icon via iconify you would name it `thumbs-up-color-lg` where `-lg` is the tag added to signify a large scale version. then it could be used by iconify by using `fi-e-thumbs-up-color-lg`

### 3. Templates

While we prefer to use sketch to design all of our icons, we understnad that not everyone has access to use sketch or may prefer a different tool. To this end we try to maintian templates for all the popular tools out there. You can find more info in the Readme in the templates folder.

Each icon will be developed using one of the templates provided and saved in a state ready to export. The filename should be the same as the final name for the icon as well as the containing layer in the file itself.

#### 3.i Icon Sets

The exception to the rule is if you are providing a new set of icons. To facilitate this its far easier to maintain a single file which can easily export all the icons. The naming of each icons layer in the file must match each icons final filename. However the name of the template file should follow the following convention `type-set` exp: `color-prosilver`.

### 4. Sub Icons

To facilitate better quality across icons as it is common practice to have sub icons, the use of a standard size for all of them will be used in the set. We reccommend using **even numbers** but that is **not** a requirment. The only requirment is that it be **no less** than **1.5px**.

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
