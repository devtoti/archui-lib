import ThemeTypeSwitcher from './ThemeTypeSwitcher';
import { ErrorBoundary } from './ErrorBoundary';

interface NavbarProps {
  children?: React.ReactNode;
}

export default function Navbar({ children }: NavbarProps) {
  return (
    <div className="col-span-4 md:col-span-8 lg:col-span-12 w-full relative left-1/2 right-1/2 -translate-x-1/2">
      <div className="arc-body-1 text-white bg-[var(--orange-10)] px-sys-pd-lg px-sys-pd-sm w-full text-center">
        ArchUI v1.1.0 is an early release. Please note that many features are
        still in the experimental phase.
      </div>
      <nav className="grainy bg-sys-surface-white grid grid-cols-4 gap-4 w-[calc(100%-16px)] h-12 w-full justify-between items-center py-2">
        <div className="desktop hidden md:visible lg:contents">
          <svg
            width="98"
            height="24"
            viewBox="0 0 98 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="col-start-1 col-span-1 row-start-1 h-8 inline-block align-middle mr-auto text-sys-primary"
            aria-label="ArchUI Logo"
          >
            <path
              d="M30.9004 9.51367L29.2744 15.5H27.8975L30.1387 8.39062H30.998L30.9004 9.51367ZM32.1846 15.5L30.5586 9.51367L30.4463 8.39062H31.3154L33.5664 15.5H32.1846ZM32.2285 12.8535V13.9424H28.9668V12.8535H32.2285ZM35.3184 8.39062H37.5303C38.0023 8.39062 38.4043 8.47201 38.7363 8.63477C39.0684 8.79753 39.3206 9.03841 39.4932 9.35742C39.6689 9.67643 39.7568 10.0687 39.7568 10.5342C39.7568 10.9053 39.7031 11.2275 39.5957 11.501C39.4915 11.7712 39.3418 11.9974 39.1465 12.1797C38.9544 12.362 38.7217 12.5036 38.4482 12.6045L38.0527 12.8291H36.2217L36.2168 11.7402H37.501C37.7126 11.7402 37.8883 11.693 38.0283 11.5986C38.1715 11.5042 38.2773 11.374 38.3457 11.208C38.4173 11.0387 38.4531 10.8451 38.4531 10.627C38.4531 10.3893 38.4206 10.1859 38.3555 10.0166C38.2936 9.84408 38.1943 9.71224 38.0576 9.62109C37.9242 9.52995 37.7484 9.48438 37.5303 9.48438H36.627V15.5H35.3184V8.39062ZM38.5898 15.5L37.2568 12.3164H38.6289L39.9863 15.4316V15.5H38.5898ZM45.2295 13.1562H46.5332C46.5104 13.6803 46.403 14.1247 46.2109 14.4893C46.0221 14.8506 45.7503 15.1257 45.3955 15.3145C45.0439 15.5033 44.6159 15.5977 44.1113 15.5977C43.7272 15.5977 43.3838 15.5309 43.0811 15.3975C42.7783 15.2607 42.5212 15.0638 42.3096 14.8066C42.1012 14.5495 41.9417 14.2337 41.8311 13.8594C41.7236 13.4818 41.6699 13.0505 41.6699 12.5654V11.3301C41.6699 10.8451 41.7269 10.4137 41.8408 10.0361C41.9548 9.65853 42.1175 9.33952 42.3291 9.0791C42.5439 8.81868 42.8044 8.62174 43.1104 8.48828C43.4163 8.35482 43.7614 8.28809 44.1455 8.28809C44.6533 8.28809 45.0781 8.38411 45.4199 8.57617C45.7617 8.76823 46.0254 9.0498 46.2109 9.4209C46.3965 9.78874 46.5055 10.238 46.5381 10.7686H45.2344C45.2214 10.4235 45.179 10.1501 45.1074 9.94824C45.0358 9.74316 44.9235 9.59668 44.7705 9.50879C44.6175 9.4209 44.4092 9.37695 44.1455 9.37695C43.9404 9.37695 43.763 9.41439 43.6133 9.48926C43.4635 9.56413 43.3415 9.68132 43.2471 9.84082C43.1527 9.99707 43.0827 10.1973 43.0371 10.4414C42.9915 10.6855 42.9688 10.9785 42.9688 11.3203V12.5654C42.9688 12.8942 42.9883 13.1807 43.0273 13.4248C43.0664 13.6689 43.1283 13.8724 43.2129 14.0352C43.3008 14.1947 43.418 14.3151 43.5645 14.3965C43.7109 14.4746 43.8932 14.5137 44.1113 14.5137C44.375 14.5137 44.585 14.4746 44.7412 14.3965C44.8975 14.3151 45.013 14.1768 45.0879 13.9814C45.166 13.7829 45.2132 13.5078 45.2295 13.1562ZM52.416 11.3105V12.3994H49.4619V11.3105H52.416ZM49.8037 8.39062V15.5H48.4951V8.39062H49.8037ZM53.3975 8.39062V15.5H52.0986V8.39062H53.3975Z"
              fill="currentColor"
            />
            <path
              d="M61.6777 6.23438H63.7715V14.0938C63.7715 14.9635 63.61 15.6693 63.2871 16.2109C62.9642 16.7526 62.5241 17.1484 61.9668 17.3984C61.4095 17.6432 60.7819 17.7656 60.084 17.7656C59.3704 17.7656 58.735 17.6432 58.1777 17.3984C57.6204 17.1484 57.1829 16.7526 56.8652 16.2109C56.5527 15.6693 56.3965 14.9635 56.3965 14.0938V6.23438H58.4824V14.0938C58.4824 14.6094 58.5449 15.0078 58.6699 15.2891C58.8001 15.5703 58.9824 15.763 59.2168 15.8672C59.4512 15.9714 59.7402 16.0234 60.084 16.0234C60.4277 16.0234 60.7168 15.9714 60.9512 15.8672C61.1855 15.763 61.3652 15.5703 61.4902 15.2891C61.6152 15.0078 61.6777 14.6094 61.6777 14.0938V6.23438Z"
              fill="currentColor"
            />
            <path
              d="M69.3949 6.23438L69.9367 17.6094H66.9285L67.3168 6.23438H69.3949Z"
              fill="currentColor"
            />
            <path
              d="M66.9561 6.86865H69.8602V7.16682C69.8602 7.44297 69.6364 7.66682 69.3602 7.66682H67.4561C67.1799 7.66682 66.9561 7.44297 66.9561 7.16682V6.86865Z"
              fill="currentColor"
            />
            <rect
              x="66.8301"
              y="6.23438"
              width="3.15588"
              height="0.634354"
              rx="0.1"
              fill="currentColor"
            />
            <path
              opacity="0.34"
              d="M71.4824 3.42652C72.9946 3.42428 74.5535 4.3862 74.835 6.31226L73.3506 6.52906C73.1937 5.45579 72.3736 4.92518 71.4844 4.92652C70.5904 4.92798 69.7359 5.46998 69.5439 6.55152L68.4443 6.35621L67.2637 6.52906C67.1068 5.45583 66.2866 4.92523 65.3975 4.92652C64.5035 4.92798 63.649 5.46999 63.457 6.55152L61.9805 6.2898C62.3181 4.38673 63.8881 3.42883 65.3955 3.42652C66.5944 3.42478 67.8213 4.02984 68.4189 5.23999C69.0456 4.03484 70.2837 3.42835 71.4824 3.42652Z"
              fill="currentColor"
            />
          </svg>
          <div className="col-span-2 -col-end-1 flex flex-row justify-end gap-4">
            <a
              href="https://github.com/devtoti"
              className="-col-end-3 arc-body-1 block w-max h-full text-sys-secondary my-auto decoration-none transition-colors duration-150 hover:text-sys-blue-8 hover:underline focus:text-sys-blue-7 focus:underline active:text-sys-primary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open GitHub (opens in a new tab)"
            >
              github <span className="sr-only">(opens in a new tab)</span>
            </a>
            <a
              href="https://www.npmjs.com/package/@devtoti/archui-lib"
              className="w-24 -col-end-2 arc-body-1 block w-max h-full text-sys-secondary my-auto decoration-none transition-colors duration-150 hover:text-sys-blue-8 hover:underline focus:text-sys-blue-7 focus:underline active:text-sys-primary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Get Started documentation (opens in a new tab)"
              tabIndex={0}
            >
              npm <span className="sr-only">(opens in a new tab)</span>
            </a>

            <button
              type="button"
              className="w-24 -col-end-1 flex items-center justify-center bg-sys-surface-primary h-8 w-max border-2 border-sys-brd-accent text-sys-primary uppercase font-bold text-xs py-sys-pd-sm px-sys-pd-md rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sys-brd-accent transition-colors hover:bg-blue-100 hover:cursor-pointer hover:text-blue-800 hover:font-black hover:border-blue-700"
              aria-label="Get Started (opens documentation in a new tab)"
            >
              <a
                href="https://devtoti.github.io/archui-lib/?path=/docs/00-getting-started-why-archui--docs"
                className="arc-body-1 block w-full w-full decoration-none"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Get Started documentation (opens in a new tab)"
              >
                Get Started{' '}
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </button>
            <ErrorBoundary>
              <ThemeTypeSwitcher />
            </ErrorBoundary>
          </div>
        </div>
        <div className="mobile contents lg:hidden">
          <svg
            width="98"
            height="24"
            viewBox="0 0 98 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 inline-block align-middle text-sys-primary"
            aria-label="ArchUI Logo"
          >
            <path
              d="M30.9004 9.51367L29.2744 15.5H27.8975L30.1387 8.39062H30.998L30.9004 9.51367ZM32.1846 15.5L30.5586 9.51367L30.4463 8.39062H31.3154L33.5664 15.5H32.1846ZM32.2285 12.8535V13.9424H28.9668V12.8535H32.2285ZM35.3184 8.39062H37.5303C38.0023 8.39062 38.4043 8.47201 38.7363 8.63477C39.0684 8.79753 39.3206 9.03841 39.4932 9.35742C39.6689 9.67643 39.7568 10.0687 39.7568 10.5342C39.7568 10.9053 39.7031 11.2275 39.5957 11.501C39.4915 11.7712 39.3418 11.9974 39.1465 12.1797C38.9544 12.362 38.7217 12.5036 38.4482 12.6045L38.0527 12.8291H36.2217L36.2168 11.7402H37.501C37.7126 11.7402 37.8883 11.693 38.0283 11.5986C38.1715 11.5042 38.2773 11.374 38.3457 11.208C38.4173 11.0387 38.4531 10.8451 38.4531 10.627C38.4531 10.3893 38.4206 10.1859 38.3555 10.0166C38.2936 9.84408 38.1943 9.71224 38.0576 9.62109C37.9242 9.52995 37.7484 9.48438 37.5303 9.48438H36.627V15.5H35.3184V8.39062ZM38.5898 15.5L37.2568 12.3164H38.6289L39.9863 15.4316V15.5H38.5898ZM45.2295 13.1562H46.5332C46.5104 13.6803 46.403 14.1247 46.2109 14.4893C46.0221 14.8506 45.7503 15.1257 45.3955 15.3145C45.0439 15.5033 44.6159 15.5977 44.1113 15.5977C43.7272 15.5977 43.3838 15.5309 43.0811 15.3975C42.7783 15.2607 42.5212 15.0638 42.3096 14.8066C42.1012 14.5495 41.9417 14.2337 41.8311 13.8594C41.7236 13.4818 41.6699 13.0505 41.6699 12.5654V11.3301C41.6699 10.8451 41.7269 10.4137 41.8408 10.0361C41.9548 9.65853 42.1175 9.33952 42.3291 9.0791C42.5439 8.81868 42.8044 8.62174 43.1104 8.48828C43.4163 8.35482 43.7614 8.28809 44.1455 8.28809C44.6533 8.28809 45.0781 8.38411 45.4199 8.57617C45.7617 8.76823 46.0254 9.0498 46.2109 9.4209C46.3965 9.78874 46.5055 10.238 46.5381 10.7686H45.2344C45.2214 10.4235 45.179 10.1501 45.1074 9.94824C45.0358 9.74316 44.9235 9.59668 44.7705 9.50879C44.6175 9.4209 44.4092 9.37695 44.1455 9.37695C43.9404 9.37695 43.763 9.41439 43.6133 9.48926C43.4635 9.56413 43.3415 9.68132 43.2471 9.84082C43.1527 9.99707 43.0827 10.1973 43.0371 10.4414C42.9915 10.6855 42.9688 10.9785 42.9688 11.3203V12.5654C42.9688 12.8942 42.9883 13.1807 43.0273 13.4248C43.0664 13.6689 43.1283 13.8724 43.2129 14.0352C43.3008 14.1947 43.418 14.3151 43.5645 14.3965C43.7109 14.4746 43.8932 14.5137 44.1113 14.5137C44.375 14.5137 44.585 14.4746 44.7412 14.3965C44.8975 14.3151 45.013 14.1768 45.0879 13.9814C45.166 13.7829 45.2132 13.5078 45.2295 13.1562ZM52.416 11.3105V12.3994H49.4619V11.3105H52.416ZM49.8037 8.39062V15.5H48.4951V8.39062H49.8037ZM53.3975 8.39062V15.5H52.0986V8.39062H53.3975Z"
              fill="currentColor"
            />
            <path
              d="M61.6777 6.23438H63.7715V14.0938C63.7715 14.9635 63.61 15.6693 63.2871 16.2109C62.9642 16.7526 62.5241 17.1484 61.9668 17.3984C61.4095 17.6432 60.7819 17.7656 60.084 17.7656C59.3704 17.7656 58.735 17.6432 58.1777 17.3984C57.6204 17.1484 57.1829 16.7526 56.8652 16.2109C56.5527 15.6693 56.3965 14.9635 56.3965 14.0938V6.23438H58.4824V14.0938C58.4824 14.6094 58.5449 15.0078 58.6699 15.2891C58.8001 15.5703 58.9824 15.763 59.2168 15.8672C59.4512 15.9714 59.7402 16.0234 60.084 16.0234C60.4277 16.0234 60.7168 15.9714 60.9512 15.8672C61.1855 15.763 61.3652 15.5703 61.4902 15.2891C61.6152 15.0078 61.6777 14.6094 61.6777 14.0938V6.23438Z"
              fill="currentColor"
            />
            <path
              d="M69.3949 6.23438L69.9367 17.6094H66.9285L67.3168 6.23438H69.3949Z"
              fill="currentColor"
            />
            <path
              d="M66.9561 6.86865H69.8602V7.16682C69.8602 7.44297 69.6364 7.66682 69.3602 7.66682H67.4561C67.1799 7.66682 66.9561 7.44297 66.9561 7.16682V6.86865Z"
              fill="currentColor"
            />
            <rect
              x="66.8301"
              y="6.23438"
              width="3.15588"
              height="0.634354"
              rx="0.1"
              fill="currentColor"
            />
            <path
              opacity="0.34"
              d="M71.4824 3.42652C72.9946 3.42428 74.5535 4.3862 74.835 6.31226L73.3506 6.52906C73.1937 5.45579 72.3736 4.92518 71.4844 4.92652C70.5904 4.92798 69.7359 5.46998 69.5439 6.55152L68.4443 6.35621L67.2637 6.52906C67.1068 5.45583 66.2866 4.92523 65.3975 4.92652C64.5035 4.92798 63.649 5.46999 63.457 6.55152L61.9805 6.2898C62.3181 4.38673 63.8881 3.42883 65.3955 3.42652C66.5944 3.42478 67.8213 4.02984 68.4189 5.23999C69.0456 4.03484 70.2837 3.42835 71.4824 3.42652Z"
              fill="currentColor"
            />
          </svg>
          <ErrorBoundary>
            <ThemeTypeSwitcher />
          </ErrorBoundary>
          {/* <button
            type="button"
            className="row-start-1 col-start-2 col-span-2 flex items-center place-self-center justify-center text-sm font-bold h-8 w-max border-2 border-sys-brd-accent text-sys-primary uppercase py-sys-pd-sm px-sys-pd-md rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sys-brd-accent transition-colors hover:bg-blue-100 hover:cursor-pointer hover:text-blue-800 hover:font-black hover:border-blue-700"
            aria-label="Get Started (opens documentation in a new tab)"
          >
            <a
              href="https://devtoti.github.io/archui-lib/?path=/docs/00-getting-started-why-archui--docs"
              className="arc-body-1 block w-full w-full decoration-none"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Get Started documentation (opens in a new tab)"
            >
              Get Started <span className="sr-only">(opens in a new tab)</span>
            </a>
          </button> */}
        </div>
      </nav>
      {children}
    </div>
  );
}
