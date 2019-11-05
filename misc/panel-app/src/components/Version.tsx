import * as React from "react";

export class Version extends React.Component {
  render() {
    const manifest:any = chrome && chrome.runtime && chrome.runtime.getManifest();
    const version:string = manifest && manifest.version;
    return <span>v{version}</span>;
  }
}
