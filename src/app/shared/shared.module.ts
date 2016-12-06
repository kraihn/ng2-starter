import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { MaterialModule }      from '@angular/material';

import * as SplitCard from './split-card/split-card.component';
import * as CardSplash from './card-splash/card-splash.component';
import * as ProfileAvatar from './profile-avatar/profile-avatar';
import * as ToolbarProfile from './toolbar-profile/toolbar-profile';

const components = [
  SplitCard.SplitCard,
  SplitCard.SplitCardRight,
  SplitCard.SplitCardLeft,
  CardSplash.CardSplash,
  CardSplash.CardSplashLogo,
  CardSplash.CardSplashPrimary,
  CardSplash.CardSplashSecondary,
  ProfileAvatar.ProfileAvatar,
  ToolbarProfile.ToolbarProfile,
];

@NgModule({
  imports:      [ CommonModule, MaterialModule],
  declarations: [ ...components ],
  exports:      [ CommonModule, FormsModule, MaterialModule, ...components ]
})
export class SharedModule { }

