# 🔍 Maud
A small Electron app that displays frame data from the [Watson](https://github.com/TailorDev/Watson) timetracking CLI tool.

![screenshot](https://user-images.githubusercontent.com/2915643/161426070-708c131a-6653-4cf5-b7cd-57c5872f3e7c.png)

* Directly loads latest Watson data from frames file (No need to export as .csv or similar)
* Displays overview of tracked frames - including accumulated time and a GitHub-like calendar heatmap
* Per-project view - lists all frames for a respective project with date, duration and associated tags
* [Not yet implemented] Date picker to narrow display to a specific timeframe (week, month, last year etc.)


## Get Maud

1. [Download the latest version of Maud](https://github.com/mistress-of-loft-and-spire/maud/releases) (Linux, Windows, MacOSX)

2. Extract the archive to where you like and run `maud` / `maud.exe` / `Maud.app`

3. Load the Watson `frames` file. It should be located at:
   * Linux: `~/.config/watson/frames`
   * Windows: `%appdata%\watson\frames` or `C:\Users\<user>\AppData\Roaming\watson\frames`
   * MacOSX: `~/Library/Application Support/watson/frames`


## About this Project

This tool was made as a personal project for getting a better handle on my worktime. I'm publishing this in the hope that it can be helpful to others in their personal and non-personal projects.

While Maud is usable, it is still in a pretty early and rough state. You might encounter bugs or oddities.

I don't have a concrete development goal or planned feature list, so I will be updating this app as I encounter needs or issues and whenever I have the time. But please have a look at the [issue tracker](https://github.com/mistress-of-loft-and-spire/maud/issues) for things I'm thinking about. Feel free to suggest ideas or report bugs there!


## License and Acknowledgments

Maud was designed by [the Mistress of Loft and Spire](https://github.com/mistress-of-loft-and-spire) with the use of the following resources:

* [Happy Hues color palette](https://www.happyhues.co/palettes/4)
* [Inter typeface family](https://rsms.me/inter/) (SIL Open Font License 1.1)
* [Cal-heatmap javascript module](https://cal-heatmap.com/) (MIT License)

----

The name is inspired by [Maud West](https://www.newspapers.com/clip/29519806/british-capital-boasts-feminine/), a London-based private detective that lived from 1880 - 1964 and was famous for donning genderbending disguises during their investigations.

Also inspired by:

* [Watson](https://tailordev.github.io/Watson/) (being it is what this tool was based upon)
* [Crick](https://github.com/TailorDev/crick) (Unfortunately no longer available - also server-based, which I don't like)

----

Maud is licensed under the [CNPLv7+ Cooperative Nonviolent Public License](LICENSE)

```
Copyright (C) 2022 (Mistress of Loft and Spire)

Maud is non-violent software: you can use, redistribute,
and/or modify it under the terms of the CNPLv7+ as found
in the LICENSE file in the source code root directory or
at <https://git.pixie.town/thufie/npl-builder>.

Maud comes with ABSOLUTELY NO WARRANTY, to the extent
permitted by applicable law.  See the CNPL for details.
```
