import { Action } from '@ngrx/store';
import { makeActionType } from '../../shared';


export class ActionTypes {
  static readonly APP_LOADED = makeActionType('[Layout] App Loaded');
  static readonly OPEN_SIDENAV = makeActionType('[Layout] Open Sidenav');
  static readonly CLOSE_SIDENAV = makeActionType('[Layout] Close Sidenav');
  static readonly EXPAND_SIDENAV = makeActionType('[Layout] Expand Sidenav');
  static readonly COLLAPSE_SIDENAV = makeActionType('[Layout] Collapse Sidenav');
};


export class AppLoadedAction implements Action {
  readonly type = ActionTypes.APP_LOADED;
}

export class OpenSidenavAction implements Action {
  readonly type = ActionTypes.OPEN_SIDENAV;
}

export class CloseSidenavAction implements Action {
  readonly type = ActionTypes.CLOSE_SIDENAV;
}

export class ExpandSidenavAction implements Action {
  readonly type = ActionTypes.EXPAND_SIDENAV;
}

export class CollapseSidenavAction implements Action {
  readonly type = ActionTypes.COLLAPSE_SIDENAV;
}


export type LayoutAction
  = AppLoadedAction
  | OpenSidenavAction
  | CloseSidenavAction
  | ExpandSidenavAction
  | CollapseSidenavAction;
