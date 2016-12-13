import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { MaterialModule }      from '@angular/material';

import * as ActionsList from './actions-list/actions-list';
import * as CardSplash from './card-splash/card-splash.component';
import * as FillSpace from './fill-space/fill-space';
import * as HelpButton from './help-button/help-button';
import * as HelpLink from './help-link/help-link';
import * as HeroLink from './hero-unit/hero-unit';
import * as LargeCircleButton from './large-circle-button/large-circle-button';
import * as IconLink from './icon-link/icon-link';
import * as LinksList from './links-list/linkS-list';
import * as PageAction from './page-action/page-action';
import * as PageNavBar from './page-nav-bar/page-nav-bar';
import * as PageNavLink from './page-nav-link/page-nav-link';
import * as PageTitle from './page-title/page-title';
import * as PageToolbar from './page-toolbar/page-toolbar';
import * as ProfileAvatar from './profile-avatar/profile-avatar';
import * as SplitCard from './split-card/split-card.component';
import * as TagLine from './tag-line/tag-line';
import * as ToolbarProfile from './toolbar-profile/toolbar-profile';
import * as WelcomeBanner from './welcome-banner/welcome-banner';

const components = [
  ActionsList.ActionsList,
  ActionsList.ActionsListFooter,
  CardSplash.CardSplash,
  CardSplash.CardSplashLogo,
  CardSplash.CardSplashPrimary,
  CardSplash.CardSplashSecondary,
  FillSpace.FillSpace,
  HelpButton.HelpButton,
  HelpLink.HelpLink,
  HeroLink.HeroUnit,
  HeroLink.HeroUnitImage,
  LargeCircleButton.LargeCircleButton,
  IconLink.IconLink,
  LinksList.LinksList,
  PageAction.PageAction,
  PageNavBar.PageNavBar,
  PageNavLink.PageNavLink,
  PageTitle.PageTitle,
  PageToolbar.PageToolbar,
  ProfileAvatar.ProfileAvatar,
  SplitCard.SplitCard,
  SplitCard.SplitCardRight,
  SplitCard.SplitCardLeft,
  TagLine.TagLine,
  TagLine.TagLineFooter,
  ToolbarProfile.ToolbarProfile,
  WelcomeBanner.WelcomeBanner,
  WelcomeBanner.WelcomeBannerContent,
  WelcomeBanner.WelcomeBannerTitle
];

@NgModule({
  imports:      [ CommonModule, MaterialModule, RouterModule],
  declarations: [ ...components ],
  exports:      [ CommonModule, FormsModule, MaterialModule, ...components ]
})
export class SharedModule { }

