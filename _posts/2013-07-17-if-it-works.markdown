---
layout: article
title:  "If it works"
date:   2013-07-11 10:20:09
categories: thoughts

---

![Champs:Battlegrounds]({{edchao.github.io}}/assets/img_hud_change.jpg)

We recently changed the ability HUD from a pretty circle to a more staunch progress bar.  Though the original circle did a lot of things well (It clearly tied the HUD to the unit and also boosted tap accuracy by giving a unique corner to each ability) it bombed in user tests.  That's because it failed in achieving the main purposes of the UI. That was to make the following concepts clear.

1. Abilities share a pool of energy.
2. Energy progresses from empty to full. This is tied to the notion that abilities require differing amounts of energy.
3. The HUD is an enlarged version of the mini-energy bar floating above the unit head (not shown in the image).


The bar HUD wasn't as elegant looking as the circle, nor did it have the kind of twitch accuracy the circle afforded . But it was just way more understandable and more importantly it just worked.  And indeed after we tested it again... "Great success."