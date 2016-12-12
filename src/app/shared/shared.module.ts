import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { MaterialModule }      from '@angular/material';

import * as SplitCard from './split-card/split-card.component';
import * as CardSplash from './card-splash/card-splash.component';
import * as ProfileAvatar from './profile-avatar/profile-avatar';
import * as ToolbarProfile from './toolbar-profile/toolbar-profile';
import * as PageToolbar from './page-toolbar/page-toolbar';
import * as PageTitle from './page-title/page-title';
import * as PageNavLink from './page-nav-link/page-nav-link';
import * as PageNavBar from './page-nav-bar/page-nav-bar';
import * as PageAction from './page-action/page-action';
import * as HelpButton from './help-button/help-button';
import * as HelpLink from './help-link/help-link';
import * as FillSpace from './fill-space/fill-space';

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
  PageTitle.PageTitle,
  PageAction.PageAction,
  HelpButton.HelpButton,
  HelpLink.HelpLink,
  FillSpace.FillSpace,
  PageNavBar.PageNavBar,
  PageNavLink.PageNavLink,
  PageToolbar.PageToolbar,
];

@NgModule({
  imports:      [ CommonModule, MaterialModule, RouterModule],
  declarations: [ ...components ],
  exports:      [ CommonModule, FormsModule, MaterialModule, ...components ]
})
export class SharedModule { }

