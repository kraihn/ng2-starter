export interface State {
  showSidebar: boolean;
  expandSidebar: boolean;
  appLoaded: boolean
}

export const initialState: State = {
  showSidebar: true,
  expandSidebar: true,
  appLoaded: false
};
