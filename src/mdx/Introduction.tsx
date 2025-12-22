import "./introduction.css";
import PackageInfo from "./../../package.json";

export const Introduction = () => {
  return (
    <div className="introduction">
      <h2 className="introduction__heading">{PackageInfo.name}</h2>
      <h4 className="introduction__heading introduction__heading--subtitle">{`v${PackageInfo.version}`}</h4>
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
    </div>
  );
};
