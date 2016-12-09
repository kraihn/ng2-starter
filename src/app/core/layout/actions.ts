import { Action } from '@ngrx/store';
import { type } from '../util';


export const ActionTypes = {
  OPEN_SIDENAV:   type('[Layout] Open Sidenav'),
  CLOSE_SIDENAV:  type('[Layout] Close Sidenav'),
  EXPAND_SIDENAV:   type('[Layout] Expand Sidenav'),
  COLLAPSE_SIDENAV:  type('[Layout] Collapse Sidenav')
};


export class OpenSidenavAction implements Action {
  type = ActionTypes.OPEN_SIDENAV;
}

export class CloseSidenavAction implements Action {
  type = ActionTypes.CLOSE_SIDENAV;
}

export class ExpandSidenavAction implements Action {
  type = ActionTypes.EXPAND_SIDENAV;
}

export class CollapseSidenavAction implements Action {
  type = ActionTypes.COLLAPSE_SIDENAV;
}


export type LayoutAction
  = OpenSidenavAction
  | CloseSidenavAction
  | ExpandSidenavAction
  | CollapseSidenavAction;
