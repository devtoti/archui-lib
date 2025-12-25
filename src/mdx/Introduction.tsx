import "./introduction.css";
import PackageInfo from "./../../package.json";

export const Introduction = () => {
  return (
    <div className="introduction">
      <div className="introduction__content">
        <h1 className="introduction__heading">
          ARCH<span className="introduction__heading--accent">UI</span>
        </h1>
        <h4 className="introduction__heading--subtitle">{PackageInfo.name}</h4>
        <p className="introduction__heading--version">{`v${PackageInfo.version}`}</p>
        <p className="introduction__heading--description">
          {PackageInfo.description}
        </p>
      </div>
      <div className="introduction__links">
        <a href="https://devtoti.com/" className="introduction__link">
          Portfolio
        </a>
        <a
          href="https://github.com/devtoti/archui-lib"
          className="introduction__link"
        >
          GitHub Repo
        </a>
        <a
          href="https://github.com/devtoti/archui-lib/releases"
          className="introduction__link"
        >
          Releases
        </a>
      </div>
      <div className="image-container"></div>
    </div>
  );
};
