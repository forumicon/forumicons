# ![FourmiCon](https://secure.gravatar.com/avatar/7a1087fbec24cbbcd0abf7ea965fa30e?s=48) ForumiCon
Free to use community developed vector Forum icon/imgs ibrary

## WIP - Comming Soon

### What is **Forumicon**
fourmicon is a community built and maintained repository of completly free to use vector graphics to use for your forum/site/app/or project. There is no need to provide attribution. Instead we only ask that is you really like an asset or series that you consider  donation via the link on to that icons page on the wesite. Its completely not mandatory but helps to promote quality design submissions. There is no limit on how much you can donate or how many times.

Furthermore you can acctually create an [Icon/img request](https://github.com/forumicon/forumicons/issues/new?assignees=&labels=ICON+Request&template=---icon-request.md&title=%5BICON+REQUEST%5D+) if you have a specific design that you need that is not available. The community will do its best to provide a quality design to meet your needs. Once **Approved** and **Merged** into the repository it will almost immediately be available via the [Iconify](https://iconify.design/) service which is covered later in more detail. We only ask again that to consider providing a donation for the work on the icon page. This is provided directly to the **Artist** `(85%)` | **Reviewer** `(10%)` | **FourmiCon** `(5%)`. This payment scale may change overtime depending on how much is needed for up keep. The intent is to fund the community and the artists/members for there time. As more donations flow in a smaller % may be required to pay the bills to keep the lights running for **FourmiCon**. The difference will then go to the **Artist** most likely. Furthermore none of these are set in stone. They are all up to the community to set with the exception of the % required to pay the bills...

### How to use the icons?
Using the icons could not be simpiler. All of our icons are added to the [Iconify](https://iconify.design/) icon service. Its a simple to use javascript api that fetches any requested icons and returns them to the page as highly compressed and cached inline svgs. See more on how this works on the [Iconify](https://iconify.design/) website.

### What is the process for getting custom icons?
1. Create an [Icon Request](https://github.com/forumicon/forumicons/issues/new?assignees=&labels=ICON+Request&template=---icon-request.md&title=%5BICON+REQUEST%5D+) issue.
2. Designer creates an Icon Pull Request
3. Reviewer Approves Icon and Merges Pull Request
4. Check the [FourmiCon](https://www.fourmicon.com) site for the name of your icon/s and follow the guide to adding to your project directly or via [Iconify](https://iconify.design/).

### What is the benifit over all the other icon libraries?
There are alot of free icons/libraries out there to use. They all have lots of quality icons but we offer more versatile assets and the capability to request professional work.

##### Whats the difference between this and https://materialdesignicons.com/ a.k.a: **MDI**
1. Nothing they are a great resource we can not recommend enough. However again we have different types of icons (icons, emojis, imagesets, forum-icons, topic-icons, rank-imgs, etc...) which is outside the norm of a simple icon.
2. We also offer the ability to request custom icons/sets which does not work with the intent of **MDI**.
3. We offer a donation based system for icon submissions to support the artists. While the concept is still the same, all design submissions give the express consent of ownership of the designs to **FourmiCon**. As Artists ourselves we still wish to allow for contribution/support to the great Artisits that are apart of our community.
4. Lastly they have a strict policy on duplication of usecases. Meaning that there are only allowed a few versions of each icon for example 

```css
home-solid
home-outline
home-variant-solid
home-variant-outline
```

###### We allow infinite variations on an icon. You can submit enitre sets of icons even. 

##### _Forumicon Nameing Conventions_:

```javascript
Icon-Name-theme-size-set
```

###### So For example you colud have: 

```css
home-color-spify
home-color-lg-spify
home-solid-spify
home-outline-spify
home-twotone-spify
home-solid-exl
discord-outline-exl
admin-outline-army
house-color-twemoji
```

###### Icon Categories

You may have a whole set of shield icons with different themes and sizes. You may even have an emoji version.

```css
shield-check-outline-shieldy
shield-check-solid-shieldy
shield-check-twotone-shieldy
shield-check-color-shieldy
shield-check-color-lg-shieldy
shield-check-color-shieldy <- emoji
shield-check-color-lg-shieldy <- emoji
```

How do we handle these then given the naming convention above?

Categories are handled via a prefix. The repo has a prefix of `fi` is the global prefix for the repo. The following are the prefixes for the categories.

| Icon Type  | Prefix | Exp |
| ------------- | ------------- | ------------- |
| Icon  | `fi-` | `fi-shield-check-color-shieldy` |
| Imageset  | `fi-s-`  | `fi-s-shield-check-color-shieldy`|
| Forum Image  | `fi-i-`  | `fi-i-shield-check-color-shieldy` |
| Brand Icon  | `fi-b-`  | `fi-b-shield-check-color-shieldy` |
| Rank Image  | `fi-r-`  | `fi-r-shield-check-color-shieldy` |
| Emoji  | `fi-e-`  | `fi-e-shield-check-color-shieldy` |

> Check the [Guidlines](https://github.com/forumicon/forumicons/blob/master/design/README.md) for more info on the naming conventions 

##### Each has a different license and attribution requirments. 
###### We have none!

##### Most are managed by singile individuals or small teams.
###### We enpower the entire community at large!

##### Most have verying degrees of design quality and loose practices or poor understanding of proper implimentation of vector graphics
###### We employ strict adherence and quality control processes to ensure the best qaulity and consistency as well as vast experience working with, designing, and integrating icons into various applications & projects.

### Frequently Asked Questions?

##### What is Vector, What is Raster?
###### Vector graphics are a computer generated and render image. Meaning that its built via code. Raster images are compressed and pixelate or become blurry when you scale or zoom in on them.

##### Why Vector?
###### Vector graphics provide several benifits over "Raster Graphics".
- **They are scaleable to any size**
- **Completely responsive by nature**
- **Are fully uncompressed, pixel perfect - No pixelization or blurryness**

#### Do I have to use them with [Iconify](https://iconify.design/)?
##### No you cna simply download adn use it anywhere you like. Its completely up to you. We do ask that you consider looking at using [Iconify](https://iconify.design/) if its feasabile as it makes it a breeze to swap out assets without having to download/upload or host it.
