## A pagina de login

<div
  class="export-wrapper"
  style="
    width: 1440px;
    min-height: 812px;
    position: relative;
    font-family: var(--font-family-body);
    background-color: var(--background);
  "
>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@100;200;300;400;500;600;700;800;900&family=Geist:wght@100;200;300;400;500;600;700;800;900&family=IBM+Plex+Mono:wght@100;200;300;400;500;600;700&family=IBM+Plex+Sans:wght@100;200;300;400;500;600;700&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Nunito:wght@200;300;400;500;600;700;800;900&family=PT+Serif:wght@400;700&family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;700;900&family=Shantell+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
    rel="stylesheet"
  />
  <html>
    <head>
      <style>
        /*! tailwindcss v4.3.0 | MIT License | https://tailwindcss.com */
        @layer properties;
        @layer theme, base, components, utilities;
        @layer theme {
          :root,
          :root {
            --font-sans:
              ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",
              "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
            --font-mono:
              ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
              "Liberation Mono", "Courier New", monospace;
            --spacing: 0.25rem;
            --container-md: 28rem;
            --container-lg: 32rem;
            --container-xl: 36rem;
            --container-2xl: 42rem;
            --container-5xl: 64rem;
            --text-xs: 11px;
            --text-xs--line-height: calc(1 / 0.75);
            --text-sm: 13px;
            --text-sm--line-height: calc(1.25 / 0.875);
            --text-base: 15px;
            --text-base--line-height: calc(1.5 / 1);
            --text-lg: 18px;
            --text-lg--line-height: calc(1.75 / 1.125);
            --text-xl: 22px;
            --text-xl--line-height: calc(1.75 / 1.25);
            --text-2xl: 28px;
            --text-2xl--line-height: calc(2 / 1.5);
            --text-3xl: 36px;
            --text-3xl--line-height: calc(2.25 / 1.875);
            --text-4xl: 48px;
            --text-4xl--line-height: calc(2.5 / 2.25);
            --font-weight-medium: 500;
            --font-weight-semibold: 600;
            --font-weight-bold: 700;
            --tracking-tight: -0.025em;
            --tracking-wide: 0.025em;
            --tracking-widest: 0.1em;
            --leading-tight: 1.25;
            --leading-snug: 1.375;
            --leading-relaxed: 1.625;
            --radius-sm: 4px;
            --radius-md: 8px;
            --radius-lg: 12px;
            --radius-xl: 24px;
            --blur-sm: 8px;
            --default-font-family: var(--font-sans);
            --default-mono-font-family: var(--font-mono);
            --color-background: #f7f8fa;
            --color-foreground: #0d1117;
            --color-border: #e2e5eb;
            --color-input: #f0f2f5;
            --color-primary: #0057b8;
            --color-primary-foreground: #ffffff;
            --color-secondary: #e8eef7;
            --color-secondary-foreground: #0057b8;
            --color-muted: #e2e5eb;
            --color-muted-foreground: #6b7280;
            --color-surface: #ffffff;
            --color-accent-green: #12a96a;
            --color-accent-green-bg: #e6f7f1;
            --color-accent-yellow: #d97706;
            --color-accent-yellow-bg: #fef3c7;
            --color-accent-orange: #ea580c;
            --color-accent-orange-bg: #ffedd5;
            --color-accent-red: #dc2626;
            --color-accent-red-bg: #fee2e2;
            --color-angola-black: #1a1a1a;
            --font-body: Inter;
            --font-headings: Inter;
          }
        }
        @layer base {
          *,
          ::after,
          ::before,
          ::backdrop,
          ::file-selector-button {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            border: 0 solid;
          }
          html,
          :root {
            line-height: 1.5;
            -webkit-text-size-adjust: 100%;
            tab-size: 4;
            font-family: var(
              --default-font-family,
              ui-sans-serif,
              system-ui,
              sans-serif,
              "Apple Color Emoji",
              "Segoe UI Emoji",
              "Segoe UI Symbol",
              "Noto Color Emoji"
            );
            font-feature-settings: var(--default-font-feature-settings, normal);
            font-variation-settings: var(
              --default-font-variation-settings,
              normal
            );
            -webkit-tap-highlight-color: transparent;
          }
          hr {
            height: 0;
            color: inherit;
            border-top-width: 1px;
          }
          abbr:where([title]) {
            -webkit-text-decoration: underline dotted;
            text-decoration: underline dotted;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-size: inherit;
            font-weight: inherit;
          }
          a {
            color: inherit;
            -webkit-text-decoration: inherit;
            text-decoration: inherit;
          }
          b,
          strong {
            font-weight: bolder;
          }
          code,
          kbd,
          samp,
          pre {
            font-family: var(
              --default-mono-font-family,
              ui-monospace,
              SFMono-Regular,
              Menlo,
              Monaco,
              Consolas,
              "Liberation Mono",
              "Courier New",
              monospace
            );
            font-feature-settings: var(
              --default-mono-font-feature-settings,
              normal
            );
            font-variation-settings: var(
              --default-mono-font-variation-settings,
              normal
            );
            font-size: 1em;
          }
          small {
            font-size: 80%;
          }
          sub,
          sup {
            font-size: 75%;
            line-height: 0;
            position: relative;
            vertical-align: baseline;
          }
          sub {
            bottom: -0.25em;
          }
          sup {
            top: -0.5em;
          }
          table {
            text-indent: 0;
            border-color: inherit;
            border-collapse: collapse;
          }
          :-moz-focusring {
            outline: auto;
          }
          progress {
            vertical-align: baseline;
          }
          summary {
            display: list-item;
          }
          ol,
          ul,
          menu {
            list-style: none;
          }
          img,
          svg,
          video,
          canvas,
          audio,
          iframe,
          embed,
          object {
            display: block;
            vertical-align: middle;
          }
          img,
          video {
            max-width: 100%;
            height: auto;
          }
          button,
          input,
          select,
          optgroup,
          textarea,
          ::file-selector-button {
            font: inherit;
            font-feature-settings: inherit;
            font-variation-settings: inherit;
            letter-spacing: inherit;
            color: inherit;
            border-radius: 0;
            background-color: transparent;
            opacity: 1;
          }
          :where(select:is([multiple], [size])) optgroup {
            font-weight: bolder;
          }
          :where(select:is([multiple], [size])) optgroup option {
            padding-inline-start: 20px;
          }
          ::file-selector-button {
            margin-inline-end: 4px;
          }
          ::placeholder {
            opacity: 1;
          }
          @supports (not (-webkit-appearance: -apple-pay-button)) or
            (contain-intrinsic-size: 1px) {
            ::placeholder {
              color: currentcolor;
              @supports (color: color-mix(in lab, red, red)) {
                color: color-mix(in oklab, currentcolor 50%, transparent);
              }
            }
          }
          textarea {
            resize: vertical;
          }
          ::-webkit-search-decoration {
            -webkit-appearance: none;
          }
          ::-webkit-date-and-time-value {
            min-height: 1lh;
            text-align: inherit;
          }
          ::-webkit-datetime-edit {
            display: inline-flex;
          }
          ::-webkit-datetime-edit-fields-wrapper {
            padding: 0;
          }
          ::-webkit-datetime-edit,
          ::-webkit-datetime-edit-year-field,
          ::-webkit-datetime-edit-month-field,
          ::-webkit-datetime-edit-day-field,
          ::-webkit-datetime-edit-hour-field,
          ::-webkit-datetime-edit-minute-field,
          ::-webkit-datetime-edit-second-field,
          ::-webkit-datetime-edit-millisecond-field,
          ::-webkit-datetime-edit-meridiem-field {
            padding-block: 0;
          }
          ::-webkit-calendar-picker-indicator {
            line-height: 1;
          }
          :-moz-ui-invalid {
            box-shadow: none;
          }
          button,
          input:where([type="button"], [type="reset"], [type="submit"]),
          ::file-selector-button {
            appearance: button;
          }
          ::-webkit-inner-spin-button,
          ::-webkit-outer-spin-button {
            height: auto;
          }
          [hidden]:where(:not([hidden="until-found"])) {
            display: none !important;
          }
        }
        @layer utilities {
          .absolute {
            position: absolute;
          }
          .relative {
            position: relative;
          }
          .inset-0 {
            inset: calc(var(--spacing) * 0);
          }
          .top-1\.5 {
            top: calc(var(--spacing) * 1.5);
          }
          .top-3 {
            top: calc(var(--spacing) * 3);
          }
          .top-4 {
            top: calc(var(--spacing) * 4);
          }
          .right-1\.5 {
            right: calc(var(--spacing) * 1.5);
          }
          .right-3 {
            right: calc(var(--spacing) * 3);
          }
          .right-4 {
            right: calc(var(--spacing) * 4);
          }
          .bottom-3 {
            bottom: calc(var(--spacing) * 3);
          }
          .bottom-4 {
            bottom: calc(var(--spacing) * 4);
          }
          .left-3 {
            left: calc(var(--spacing) * 3);
          }
          .left-4 {
            left: calc(var(--spacing) * 4);
          }
          .z-10 {
            z-index: 10;
          }
          .mx-2 {
            margin-inline: calc(var(--spacing) * 2);
          }
          .mx-auto {
            margin-inline: auto;
          }
          .mt-0\.5 {
            margin-top: calc(var(--spacing) * 0.5);
          }
          .mt-1 {
            margin-top: calc(var(--spacing) * 1);
          }
          .mt-2 {
            margin-top: calc(var(--spacing) * 2);
          }
          .mt-4 {
            margin-top: calc(var(--spacing) * 4);
          }
          .mt-auto {
            margin-top: auto;
          }
          .mb-1 {
            margin-bottom: calc(var(--spacing) * 1);
          }
          .mb-1\.5 {
            margin-bottom: calc(var(--spacing) * 1.5);
          }
          .mb-2 {
            margin-bottom: calc(var(--spacing) * 2);
          }
          .mb-3 {
            margin-bottom: calc(var(--spacing) * 3);
          }
          .mb-4 {
            margin-bottom: calc(var(--spacing) * 4);
          }
          .mb-5 {
            margin-bottom: calc(var(--spacing) * 5);
          }
          .mb-6 {
            margin-bottom: calc(var(--spacing) * 6);
          }
          .mb-7 {
            margin-bottom: calc(var(--spacing) * 7);
          }
          .mb-8 {
            margin-bottom: calc(var(--spacing) * 8);
          }
          .mb-10 {
            margin-bottom: calc(var(--spacing) * 10);
          }
          .mb-12 {
            margin-bottom: calc(var(--spacing) * 12);
          }
          .mb-14 {
            margin-bottom: calc(var(--spacing) * 14);
          }
          .ml-2 {
            margin-left: calc(var(--spacing) * 2);
          }
          .ml-auto {
            margin-left: auto;
          }
          .block {
            display: block;
          }
          .flex {
            display: flex;
          }
          .grid {
            display: grid;
          }
          .inline-flex {
            display: inline-flex;
          }
          .h-0\.5 {
            height: calc(var(--spacing) * 0.5);
          }
          .h-1 {
            height: calc(var(--spacing) * 1);
          }
          .h-1\.5 {
            height: calc(var(--spacing) * 1.5);
          }
          .h-2 {
            height: calc(var(--spacing) * 2);
          }
          .h-2\.5 {
            height: calc(var(--spacing) * 2.5);
          }
          .h-3 {
            height: calc(var(--spacing) * 3);
          }
          .h-4 {
            height: calc(var(--spacing) * 4);
          }
          .h-5 {
            height: calc(var(--spacing) * 5);
          }
          .h-7 {
            height: calc(var(--spacing) * 7);
          }
          .h-8 {
            height: calc(var(--spacing) * 8);
          }
          .h-9 {
            height: calc(var(--spacing) * 9);
          }
          .h-10 {
            height: calc(var(--spacing) * 10);
          }
          .h-14 {
            height: calc(var(--spacing) * 14);
          }
          .h-16 {
            height: calc(var(--spacing) * 16);
          }
          .h-full {
            height: 100%;
          }
          .w-1\.5 {
            width: calc(var(--spacing) * 1.5);
          }
          .w-2 {
            width: calc(var(--spacing) * 2);
          }
          .w-2\.5 {
            width: calc(var(--spacing) * 2.5);
          }
          .w-3 {
            width: calc(var(--spacing) * 3);
          }
          .w-4 {
            width: calc(var(--spacing) * 4);
          }
          .w-7 {
            width: calc(var(--spacing) * 7);
          }
          .w-8 {
            width: calc(var(--spacing) * 8);
          }
          .w-9 {
            width: calc(var(--spacing) * 9);
          }
          .w-10 {
            width: calc(var(--spacing) * 10);
          }
          .w-12 {
            width: calc(var(--spacing) * 12);
          }
          .w-28 {
            width: calc(var(--spacing) * 28);
          }
          .w-128 {
            width: calc(var(--spacing) * 128);
          }
          .w-full {
            width: 100%;
          }
          .w-px {
            width: 1px;
          }
          .max-w-2xl {
            max-width: var(--container-2xl);
          }
          .max-w-5xl {
            max-width: var(--container-5xl);
          }
          .max-w-lg {
            max-width: var(--container-lg);
          }
          .max-w-md {
            max-width: var(--container-md);
          }
          .max-w-xl {
            max-width: var(--container-xl);
          }
          .min-w-0 {
            min-width: calc(var(--spacing) * 0);
          }
          .flex-1 {
            flex: 1;
          }
          .shrink-0 {
            flex-shrink: 0;
          }
          .grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .grid-cols-3 {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
          .grid-cols-4 {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
          .flex-col {
            flex-direction: column;
          }
          .flex-wrap {
            flex-wrap: wrap;
          }
          .items-center {
            align-items: center;
          }
          .items-end {
            align-items: flex-end;
          }
          .items-start {
            align-items: flex-start;
          }
          .justify-between {
            justify-content: space-between;
          }
          .justify-center {
            justify-content: center;
          }
          .gap-0\.5 {
            gap: calc(var(--spacing) * 0.5);
          }
          .gap-1 {
            gap: calc(var(--spacing) * 1);
          }
          .gap-1\.5 {
            gap: calc(var(--spacing) * 1.5);
          }
          .gap-2 {
            gap: calc(var(--spacing) * 2);
          }
          .gap-2\.5 {
            gap: calc(var(--spacing) * 2.5);
          }
          .gap-3 {
            gap: calc(var(--spacing) * 3);
          }
          .gap-4 {
            gap: calc(var(--spacing) * 4);
          }
          .gap-5 {
            gap: calc(var(--spacing) * 5);
          }
          .gap-6 {
            gap: calc(var(--spacing) * 6);
          }
          .gap-8 {
            gap: calc(var(--spacing) * 8);
          }
          .gap-20 {
            gap: calc(var(--spacing) * 20);
          }
          .gap-px {
            gap: 1px;
          }
          .divide-y {
            :where(& > :not(:last-child)) {
              --tw-divide-y-reverse: 0;
              border-bottom-style: var(--tw-border-style);
              border-top-style: var(--tw-border-style);
              border-top-width: calc(1px * var(--tw-divide-y-reverse));
              border-bottom-width: calc(
                1px * calc(1 - var(--tw-divide-y-reverse))
              );
            }
          }
          .divide-border {
            :where(& > :not(:last-child)) {
              border-color: var(--color-border);
            }
          }
          .truncate {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .overflow-hidden {
            overflow: hidden;
          }
          .rounded-full {
            border-radius: calc(infinity * 1px);
          }
          .rounded-lg {
            border-radius: var(--radius-lg);
          }
          .rounded-md {
            border-radius: var(--radius-md);
          }
          .rounded-sm {
            border-radius: var(--radius-sm);
          }
          .rounded-xl {
            border-radius: var(--radius-xl);
          }
          .rounded-b-none {
            border-bottom-right-radius: 0;
            border-bottom-left-radius: 0;
          }
          .border {
            border-style: var(--tw-border-style);
            border-width: 1px;
          }
          .border-t {
            border-top-style: var(--tw-border-style);
            border-top-width: 1px;
          }
          .border-b {
            border-bottom-style: var(--tw-border-style);
            border-bottom-width: 1px;
          }
          .border-accent-green\/30 {
            border-color: color-mix(in srgb, #12a96a 30%, transparent);
            @supports (color: color-mix(in lab, red, red)) {
              border-color: color-mix(
                in oklab,
                var(--color-accent-green) 30%,
                transparent
              );
            }
          }
          .border-accent-orange\/20 {
            border-color: color-mix(in srgb, #ea580c 20%, transparent);
            @supports (color: color-mix(in lab, red, red)) {
              border-color: color-mix(
                in oklab,
                var(--color-accent-orange) 20%,
                transparent
              );
            }
          }
          .border-accent-orange\/30 {
            border-color: color-mix(in srgb, #ea580c 30%, transparent);
            @supports (color: color-mix(in lab, red, red)) {
              border-color: color-mix(
                in oklab,
                var(--color-accent-orange) 30%,
                transparent
              );
            }
          }
          .border-accent-red\/20 {
            border-color: color-mix(in srgb, #dc2626 20%, transparent);
            @supports (color: color-mix(in lab, red, red)) {
              border-color: color-mix(
                in oklab,
                var(--color-accent-red) 20%,
                transparent
              );
            }
          }
          .border-accent-red\/30 {
            border-color: color-mix(in srgb, #dc2626 30%, transparent);
            @supports (color: color-mix(in lab, red, red)) {
              border-color: color-mix(
                in oklab,
                var(--color-accent-red) 30%,
                transparent
              );
            }
          }
          .border-accent-yellow\/20 {
            border-color: color-mix(in srgb, #d97706 20%, transparent);
            @supports (color: color-mix(in lab, red, red)) {
              border-color: color-mix(
                in oklab,
                var(--color-accent-yellow) 20%,
                transparent
              );
            }
          }
          .border-accent-yellow\/30 {
            border-color: color-mix(in srgb, #d97706 30%, transparent);
            @supports (color: color-mix(in lab, red, red)) {
              border-color: color-mix(
                in oklab,
                var(--color-accent-yellow) 30%,
                transparent
              );
            }
          }
          .border-border {
            border-color: var(--color-border);
          }
          .border-primary {
            border-color: var(--color-primary);
          }
          .border-primary-foreground\/10 {
            border-color: color-mix(in srgb, #ffffff 10%, transparent);
            @supports (color: color-mix(in lab, red, red)) {
              border-color: color-mix(
                in oklab,
                var(--color-primary-foreground) 10%,
                transparent
              );
            }
          }
          .border-primary\/20 {
            border-color: color-mix(in srgb, #0057b8 20%, transparent);
            @supports (color: color-mix(in lab, red, red)) {
              border-color: color-mix(
                in oklab,
                var(--color-primary) 20%,
                transparent
              );
            }
          }
          .border-surface {
            border-color: var(--color-surface);
          }
          .bg-accent-green {
            background-color: var(--color-accent-green);
          }
          .bg-accent-green-bg {
            background-color: var(--color-accent-green-bg);
          }
          .bg-accent-orange {
            background-color: var(--color-accent-orange);
          }
          .bg-accent-orange-bg {
            background-color: var(--color-accent-orange-bg);
          }
          .bg-accent-red {
            background-color: var(--color-accent-red);
          }
          .bg-accent-red-bg {
            background-color: var(--color-accent-red-bg);
          }
          .bg-accent-yellow {
            background-color: var(--color-accent-yellow);
          }
          .bg-accent-yellow-bg {
            background-color: var(--color-accent-yellow-bg);
          }
          .bg-angola-black {
            background-color: var(--color-angola-black);
          }
          .bg-background {
            background-color: var(--color-background);
          }
          .bg-border {
            background-color: var(--color-border);
          }
          .bg-foreground\/70 {
            background-color: color-mix(in srgb, #0d1117 70%, transparent);
            @supports (color: color-mix(in lab, red, red)) {
              background-color: color-mix(
                in oklab,
                var(--color-foreground) 70%,
                transparent
              );
            }
          }
          .bg-foreground\/80 {
            background-color: color-mix(in srgb, #0d1117 80%, transparent);
            @supports (color: color-mix(in lab, red, red)) {
              background-color: color-mix(
                in oklab,
                var(--color-foreground) 80%,
                transparent
              );
            }
          }
          .bg-input {
            background-color: var(--color-input);
          }
          .bg-muted {
            background-color: var(--color-muted);
          }
          .bg-primary {
            background-color: var(--color-primary);
          }
          .bg-primary-foreground {
            background-color: var(--color-primary-foreground);
          }
          .bg-primary-foreground\/5 {
            background-color: color-mix(in srgb, #ffffff 5%, transparent);
            @supports (color: color-mix(in lab, red, red)) {
              background-color: color-mix(
                in oklab,
                var(--color-primary-foreground) 5%,
                transparent
              );
            }
          }
          .bg-primary-foreground\/10 {
            background-color: color-mix(in srgb, #ffffff 10%, transparent);
            @supports (color: color-mix(in lab, red, red)) {
              background-color: color-mix(
                in oklab,
                var(--color-primary-foreground) 10%,
                transparent
              );
            }
          }
          .bg-primary\/20 {
            background-color: color-mix(in srgb, #0057b8 20%, transparent);
            @supports (color: color-mix(in lab, red, red)) {
              background-color: color-mix(
                in oklab,
                var(--color-primary) 20%,
                transparent
              );
            }
          }
          .bg-primary\/30 {
            background-color: color-mix(in srgb, #0057b8 30%, transparent);
            @supports (color: color-mix(in lab, red, red)) {
              background-color: color-mix(
                in oklab,
                var(--color-primary) 30%,
                transparent
              );
            }
          }
          .bg-secondary {
            background-color: var(--color-secondary);
          }
          .bg-secondary\/30 {
            background-color: color-mix(in srgb, #e8eef7 30%, transparent);
            @supports (color: color-mix(in lab, red, red)) {
              background-color: color-mix(
                in oklab,
                var(--color-secondary) 30%,
                transparent
              );
            }
          }
          .bg-secondary\/50 {
            background-color: color-mix(in srgb, #e8eef7 50%, transparent);
            @supports (color: color-mix(in lab, red, red)) {
              background-color: color-mix(
                in oklab,
                var(--color-secondary) 50%,
                transparent
              );
            }
          }
          .bg-surface {
            background-color: var(--color-surface);
          }
          .bg-surface\/10 {
            background-color: color-mix(in srgb, #ffffff 10%, transparent);
            @supports (color: color-mix(in lab, red, red)) {
              background-color: color-mix(
                in oklab,
                var(--color-surface) 10%,
                transparent
              );
            }
          }
          .object-cover {
            object-fit: cover;
          }
          .p-1 {
            padding: calc(var(--spacing) * 1);
          }
          .p-3 {
            padding: calc(var(--spacing) * 3);
          }
          .p-4 {
            padding: calc(var(--spacing) * 4);
          }
          .p-5 {
            padding: calc(var(--spacing) * 5);
          }
          .p-6 {
            padding: calc(var(--spacing) * 6);
          }
          .p-8 {
            padding: calc(var(--spacing) * 8);
          }
          .p-12 {
            padding: calc(var(--spacing) * 12);
          }
          .px-1\.5 {
            padding-inline: calc(var(--spacing) * 1.5);
          }
          .px-2 {
            padding-inline: calc(var(--spacing) * 2);
          }
          .px-2\.5 {
            padding-inline: calc(var(--spacing) * 2.5);
          }
          .px-3 {
            padding-inline: calc(var(--spacing) * 3);
          }
          .px-4 {
            padding-inline: calc(var(--spacing) * 4);
          }
          .px-5 {
            padding-inline: calc(var(--spacing) * 5);
          }
          .px-6 {
            padding-inline: calc(var(--spacing) * 6);
          }
          .px-7 {
            padding-inline: calc(var(--spacing) * 7);
          }
          .px-8 {
            padding-inline: calc(var(--spacing) * 8);
          }
          .px-10 {
            padding-inline: calc(var(--spacing) * 10);
          }
          .px-14 {
            padding-inline: calc(var(--spacing) * 14);
          }
          .py-0 {
            padding-block: calc(var(--spacing) * 0);
          }
          .py-0\.5 {
            padding-block: calc(var(--spacing) * 0.5);
          }
          .py-1 {
            padding-block: calc(var(--spacing) * 1);
          }
          .py-1\.5 {
            padding-block: calc(var(--spacing) * 1.5);
          }
          .py-2 {
            padding-block: calc(var(--spacing) * 2);
          }
          .py-2\.5 {
            padding-block: calc(var(--spacing) * 2.5);
          }
          .py-3 {
            padding-block: calc(var(--spacing) * 3);
          }
          .py-3\.5 {
            padding-block: calc(var(--spacing) * 3.5);
          }
          .py-4 {
            padding-block: calc(var(--spacing) * 4);
          }
          .py-5 {
            padding-block: calc(var(--spacing) * 5);
          }
          .py-6 {
            padding-block: calc(var(--spacing) * 6);
          }
          .py-10 {
            padding-block: calc(var(--spacing) * 10);
          }
          .py-14 {
            padding-block: calc(var(--spacing) * 14);
          }
          .py-20 {
            padding-block: calc(var(--spacing) * 20);
          }
          .pt-2 {
            padding-top: calc(var(--spacing) * 2);
          }
          .pt-6 {
            padding-top: calc(var(--spacing) * 6);
          }
          .pt-8 {
            padding-top: calc(var(--spacing) * 8);
          }
          .pt-20 {
            padding-top: calc(var(--spacing) * 20);
          }
          .pb-0 {
            padding-bottom: calc(var(--spacing) * 0);
          }
          .pb-4 {
            padding-bottom: calc(var(--spacing) * 4);
          }
          .pb-20 {
            padding-bottom: calc(var(--spacing) * 20);
          }
          .text-center {
            text-align: center;
          }
          .text-right {
            text-align: right;
          }
          .font-body {
            font-family: var(--font-body);
          }
          .font-headings {
            font-family: var(--font-headings);
          }
          .font-mono {
            font-family: var(--font-mono);
          }
          .text-2xl {
            font-size: var(--text-2xl);
            line-height: var(--tw-leading, var(--text-2xl--line-height));
          }
          .text-3xl {
            font-size: var(--text-3xl);
            line-height: var(--tw-leading, var(--text-3xl--line-height));
          }
          .text-4xl {
            font-size: var(--text-4xl);
            line-height: var(--tw-leading, var(--text-4xl--line-height));
          }
          .text-base {
            font-size: var(--text-base);
            line-height: var(--tw-leading, var(--text-base--line-height));
          }
          .text-lg {
            font-size: var(--text-lg);
            line-height: var(--tw-leading, var(--text-lg--line-height));
          }
          .text-sm {
            font-size: var(--text-sm);
            line-height: var(--tw-leading, var(--text-sm--line-height));
          }
          .text-xl {
            font-size: var(--text-xl);
            line-height: var(--tw-leading, var(--text-xl--line-height));
          }
          .text-xs {
            font-size: var(--text-xs);
            line-height: var(--tw-leading, var(--text-xs--line-height));
          }
          .leading-none {
            --tw-leading: 1;
            line-height: 1;
          }
          .leading-relaxed {
            --tw-leading: var(--leading-relaxed);
            line-height: var(--leading-relaxed);
          }
          .leading-snug {
            --tw-leading: var(--leading-snug);
            line-height: var(--leading-snug);
          }
          .leading-tight {
            --tw-leading: var(--leading-tight);
            line-height: var(--leading-tight);
          }
          .font-bold {
            --tw-font-weight: var(--font-weight-bold);
            font-weight: var(--font-weight-bold);
          }
          .font-medium {
            --tw-font-weight: var(--font-weight-medium);
            font-weight: var(--font-weight-medium);
          }
          .font-semibold {
            --tw-font-weight: var(--font-weight-semibold);
            font-weight: var(--font-weight-semibold);
          }
          .tracking-tight {
            --tw-tracking: var(--tracking-tight);
            letter-spacing: var(--tracking-tight);
          }
          .tracking-wide {
            --tw-tracking: var(--tracking-wide);
            letter-spacing: var(--tracking-wide);
          }
          .tracking-widest {
            --tw-tracking: var(--tracking-widest);
            letter-spacing: var(--tracking-widest);
          }
          .text-accent-green {
            color: var(--color-accent-green);
          }
          .text-accent-orange {
            color: var(--color-accent-orange);
          }
          .text-accent-red {
            color: var(--color-accent-red);
          }
          .text-accent-yellow {
            color: var(--color-accent-yellow);
          }
          .text-foreground {
            color: var(--color-foreground);
          }
          .text-muted-foreground {
            color: var(--color-muted-foreground);
          }
          .text-primary {
            color: var(--color-primary);
          }
          .text-primary-foreground {
            color: var(--color-primary-foreground);
          }
          .text-primary-foreground\/30 {
            color: color-mix(in srgb, #ffffff 30%, transparent);
            @supports (color: color-mix(in lab, red, red)) {
              color: color-mix(
                in oklab,
                var(--color-primary-foreground) 30%,
                transparent
              );
            }
          }
          .text-primary-foreground\/40 {
            color: color-mix(in srgb, #ffffff 40%, transparent);
            @supports (color: color-mix(in lab, red, red)) {
              color: color-mix(
                in oklab,
                var(--color-primary-foreground) 40%,
                transparent
              );
            }
          }
          .text-primary-foreground\/50 {
            color: color-mix(in srgb, #ffffff 50%, transparent);
            @supports (color: color-mix(in lab, red, red)) {
              color: color-mix(
                in oklab,
                var(--color-primary-foreground) 50%,
                transparent
              );
            }
          }
          .text-primary-foreground\/60 {
            color: color-mix(in srgb, #ffffff 60%, transparent);
            @supports (color: color-mix(in lab, red, red)) {
              color: color-mix(
                in oklab,
                var(--color-primary-foreground) 60%,
                transparent
              );
            }
          }
          .text-primary-foreground\/70 {
            color: color-mix(in srgb, #ffffff 70%, transparent);
            @supports (color: color-mix(in lab, red, red)) {
              color: color-mix(
                in oklab,
                var(--color-primary-foreground) 70%,
                transparent
              );
            }
          }
          .text-primary-foreground\/80 {
            color: color-mix(in srgb, #ffffff 80%, transparent);
            @supports (color: color-mix(in lab, red, red)) {
              color: color-mix(
                in oklab,
                var(--color-primary-foreground) 80%,
                transparent
              );
            }
          }
          .text-secondary-foreground {
            color: var(--color-secondary-foreground);
          }
          .uppercase {
            text-transform: uppercase;
          }
          .opacity-60 {
            opacity: 60%;
          }
          .opacity-70 {
            opacity: 70%;
          }
          .shadow-sm {
            --tw-shadow:
              0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)),
              0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
            box-shadow:
              var(--tw-inset-shadow), var(--tw-inset-ring-shadow),
              var(--tw-ring-offset-shadow), var(--tw-ring-shadow),
              var(--tw-shadow);
          }
          .filter {
            filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,)
              var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,)
              var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
          }
          .backdrop-blur-sm {
            --tw-backdrop-blur: blur(var(--blur-sm));
            -webkit-backdrop-filter: var(--tw-backdrop-blur,)
              var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,)
              var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,)
              var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,)
              var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
            backdrop-filter: var(--tw-backdrop-blur,)
              var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,)
              var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,)
              var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,)
              var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
          }
        }
        @property --tw-divide-y-reverse {
          syntax: "*";
          inherits: false;
          initial-value: 0;
        }
        @property --tw-border-style {
          syntax: "*";
          inherits: false;
          initial-value: solid;
        }
        @property --tw-leading {
          syntax: "*";
          inherits: false;
        }
        @property --tw-font-weight {
          syntax: "*";
          inherits: false;
        }
        @property --tw-tracking {
          syntax: "*";
          inherits: false;
        }
        @property --tw-shadow {
          syntax: "*";
          inherits: false;
          initial-value: 0 0 #0000;
        }
        @property --tw-shadow-color {
          syntax: "*";
          inherits: false;
        }
        @property --tw-shadow-alpha {
          syntax: "<percentage>";
          inherits: false;
          initial-value: 100%;
        }
        @property --tw-inset-shadow {
          syntax: "*";
          inherits: false;
          initial-value: 0 0 #0000;
        }
        @property --tw-inset-shadow-color {
          syntax: "*";
          inherits: false;
        }
        @property --tw-inset-shadow-alpha {
          syntax: "<percentage>";
          inherits: false;
          initial-value: 100%;
        }
        @property --tw-ring-color {
          syntax: "*";
          inherits: false;
        }
        @property --tw-ring-shadow {
          syntax: "*";
          inherits: false;
          initial-value: 0 0 #0000;
        }
        @property --tw-inset-ring-color {
          syntax: "*";
          inherits: false;
        }
        @property --tw-inset-ring-shadow {
          syntax: "*";
          inherits: false;
          initial-value: 0 0 #0000;
        }
        @property --tw-ring-inset {
          syntax: "*";
          inherits: false;
        }
        @property --tw-ring-offset-width {
          syntax: "<length>";
          inherits: false;
          initial-value: 0px;
        }
        @property --tw-ring-offset-color {
          syntax: "*";
          inherits: false;
          initial-value: #fff;
        }
        @property --tw-ring-offset-shadow {
          syntax: "*";
          inherits: false;
          initial-value: 0 0 #0000;
        }
        @property --tw-blur {
          syntax: "*";
          inherits: false;
        }
        @property --tw-brightness {
          syntax: "*";
          inherits: false;
        }
        @property --tw-contrast {
          syntax: "*";
          inherits: false;
        }
        @property --tw-grayscale {
          syntax: "*";
          inherits: false;
        }
        @property --tw-hue-rotate {
          syntax: "*";
          inherits: false;
        }
        @property --tw-invert {
          syntax: "*";
          inherits: false;
        }
        @property --tw-opacity {
          syntax: "*";
          inherits: false;
        }
        @property --tw-saturate {
          syntax: "*";
          inherits: false;
        }
        @property --tw-sepia {
          syntax: "*";
          inherits: false;
        }
        @property --tw-drop-shadow {
          syntax: "*";
          inherits: false;
        }
        @property --tw-drop-shadow-color {
          syntax: "*";
          inherits: false;
        }
        @property --tw-drop-shadow-alpha {
          syntax: "<percentage>";
          inherits: false;
          initial-value: 100%;
        }
        @property --tw-drop-shadow-size {
          syntax: "*";
          inherits: false;
        }
        @property --tw-backdrop-blur {
          syntax: "*";
          inherits: false;
        }
        @property --tw-backdrop-brightness {
          syntax: "*";
          inherits: false;
        }
        @property --tw-backdrop-contrast {
          syntax: "*";
          inherits: false;
        }
        @property --tw-backdrop-grayscale {
          syntax: "*";
          inherits: false;
        }
        @property --tw-backdrop-hue-rotate {
          syntax: "*";
          inherits: false;
        }
        @property --tw-backdrop-invert {
          syntax: "*";
          inherits: false;
        }
        @property --tw-backdrop-opacity {
          syntax: "*";
          inherits: false;
        }
        @property --tw-backdrop-saturate {
          syntax: "*";
          inherits: false;
        }
        @property --tw-backdrop-sepia {
          syntax: "*";
          inherits: false;
        }
        @layer properties {
          @supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or
            ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
            *,
            ::before,
            ::after,
            ::backdrop {
              --tw-divide-y-reverse: 0;
              --tw-border-style: solid;
              --tw-leading: initial;
              --tw-font-weight: initial;
              --tw-tracking: initial;
              --tw-shadow: 0 0 #0000;
              --tw-shadow-color: initial;
              --tw-shadow-alpha: 100%;
              --tw-inset-shadow: 0 0 #0000;
              --tw-inset-shadow-color: initial;
              --tw-inset-shadow-alpha: 100%;
              --tw-ring-color: initial;
              --tw-ring-shadow: 0 0 #0000;
              --tw-inset-ring-color: initial;
              --tw-inset-ring-shadow: 0 0 #0000;
              --tw-ring-inset: initial;
              --tw-ring-offset-width: 0px;
              --tw-ring-offset-color: #fff;
              --tw-ring-offset-shadow: 0 0 #0000;
              --tw-blur: initial;
              --tw-brightness: initial;
              --tw-contrast: initial;
              --tw-grayscale: initial;
              --tw-hue-rotate: initial;
              --tw-invert: initial;
              --tw-opacity: initial;
              --tw-saturate: initial;
              --tw-sepia: initial;
              --tw-drop-shadow: initial;
              --tw-drop-shadow-color: initial;
              --tw-drop-shadow-alpha: 100%;
              --tw-drop-shadow-size: initial;
              --tw-backdrop-blur: initial;
              --tw-backdrop-brightness: initial;
              --tw-backdrop-contrast: initial;
              --tw-backdrop-grayscale: initial;
              --tw-backdrop-hue-rotate: initial;
              --tw-backdrop-invert: initial;
              --tw-backdrop-opacity: initial;
              --tw-backdrop-saturate: initial;
              --tw-backdrop-sepia: initial;
            }
          }
        }
      </style>
      <link
        rel="preload"
        as="image"
        href="/api/flow-image/9%3A16%0AAngola%20satellite%20map%20night%20view%20with%20glowing%20blue%20risk%20heatmap%20zones%2C%20data%20visualization%20overlays%2C%20epidemiological%20grid%20lines%2C%20dark%20background%2C%20cinematic%20and%20technical"
      />
    </head>
    <body>
      <div
        class="bg-angola-black font-body flex"
        style="min-height: 900px"
        data-component="@screens/MaisSaudeLogin.jsx"
      >
        <div
          class="relative flex-1 overflow-hidden flex flex-col justify-between p-12"
        >
          <img
            data-query="Angola satellite map night view with glowing blue risk heatmap zones, data visualization overlays, epidemiological grid lines, dark background, cinematic and technical"
            data-aspect-ratio="9:16"
            style="aspect-ratio: 9/16; object-fit: cover"
            src="https://storage.googleapis.com/banani-generated-images/generated-images/c722e722-ad69-4107-9100-bc22f0bf5aba.jpg"
            class="absolute inset-0 w-full h-full object-cover opacity-60"
            data-component="@globalComponents/Image.jsx"
          />
          <div
            class="absolute inset-0"
            style="
              background: linear-gradient(
                135deg,
                rgba(0, 30, 70, 0.85) 0%,
                rgba(0, 0, 0, 0.6) 100%
              );
            "
          ></div>
          <div class="relative z-10">
            <div class="flex items-center gap-2.5 mb-2">
              <div
                class="w-8 h-8 bg-primary rounded-md flex items-center justify-center"
              >
                <span
                  class="text-primary-foreground"
                  style="
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    width: 18px;
                    height: 18px;
                  "
                  data-icon="shield-check"
                  data-component="@globalComponents/Icon.jsx"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18px"
                    height="18px"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.6666666666666665"
                    >
                      <path
                        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                      ></path>
                      <path d="m9 12l2 2l4-4"></path>
                    </g></svg
                ></span>
              </div>
              <span
                class="font-headings font-semibold text-base text-primary-foreground tracking-tight"
                >+Saúde</span
              >
            </div>
          </div>
          <div class="relative z-10">
            <div
              class="bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-5 mb-6 backdrop-blur-sm"
              style="max-width: 360px"
            >
              <div class="flex items-center gap-2 mb-3">
                <span class="w-2 h-2 bg-accent-red rounded-full"></span
                ><span
                  class="text-xs font-medium text-accent-red uppercase tracking-wide"
                  ><span data-file="/screens/MaisSaudeLogin.jsx" data-idx="0"
                    >Alerta Ativo · Agora</span
                  ></span
                >
              </div>
              <div class="text-sm font-semibold text-primary-foreground mb-1">
                <span data-file="/screens/MaisSaudeLogin.jsx" data-idx="1"
                  >Risco Elevado — Luanda Sul</span
                >
              </div>
              <div class="text-xs text-primary-foreground/60 leading-relaxed">
                <span data-file="/screens/MaisSaudeLogin.jsx" data-idx="2"
                  >Sistema detetou acumulação de águas paradas em 3 municípios.
                  Possibilidade de surto de malária em 9–14 dias.</span
                >
              </div>
              <div class="flex items-center gap-3 mt-4">
                <div class="flex-1 bg-primary-foreground/10 rounded-full h-1.5">
                  <div
                    class="bg-accent-red h-1.5 rounded-full"
                    style="width: 78%"
                  ></div>
                </div>
                <span class="text-xs text-accent-red font-medium">78%</span>
              </div>
            </div>
            <div class="flex gap-6">
              <div>
                <div
                  class="font-headings text-xl font-semibold text-primary-foreground"
                >
                  162
                </div>
                <div class="text-xs text-primary-foreground/50">
                  <span data-file="/screens/MaisSaudeLogin.jsx" data-idx="3"
                    >Municípios monitorados</span
                  >
                </div>
              </div>
              <div>
                <div
                  class="font-headings text-xl font-semibold text-primary-foreground"
                >
                  24/7
                </div>
                <div class="text-xs text-primary-foreground/50">
                  <span data-file="/screens/MaisSaudeLogin.jsx" data-idx="4"
                    >Vigilância ativa</span
                  >
                </div>
              </div>
              <div>
                <div
                  class="font-headings text-xl font-semibold text-primary-foreground"
                >
                  99.2%
                </div>
                <div class="text-xs text-primary-foreground/50">
                  <span data-file="/screens/MaisSaudeLogin.jsx" data-idx="5"
                    >Uptime do sistema</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-px bg-primary/20"></div>
        <div
          class="w-128 bg-background flex flex-col justify-center px-14 py-14"
          style="width: 480px"
        >
          <div class="mb-10">
            <div
              class="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2"
            >
              <span data-file="/screens/MaisSaudeLogin.jsx" data-idx="6"
                >Acesso Restrito</span
              >
            </div>
            <h1
              class="font-headings text-2xl font-semibold text-foreground mb-2"
            >
              <span data-file="/screens/MaisSaudeLogin.jsx" data-idx="7"
                >Entrar na plataforma</span
              >
            </h1>
            <p class="text-sm text-muted-foreground">
              <span data-file="/screens/MaisSaudeLogin.jsx" data-idx="8"
                >Apenas para autoridades de saúde e pessoal credenciado.</span
              >
            </p>
          </div>
          <div class="flex bg-input rounded-md p-1 mb-7">
            <button
              class="flex-1 bg-surface text-foreground text-sm font-medium py-2 rounded-sm shadow-sm"
              data-media-type="banani-button"
            >
              <span data-file="/screens/MaisSaudeLogin.jsx" data-idx="9"
                >Autoridade de Saúde</span
              ></button
            ><button
              class="flex-1 text-muted-foreground text-sm font-medium py-2"
              data-media-type="banani-button"
            >
              <span data-file="/screens/MaisSaudeLogin.jsx" data-idx="10"
                >Agente Comunitário</span
              >
            </button>
          </div>
          <div class="flex flex-col gap-4 mb-6">
            <div>
              <label class="text-xs font-medium text-foreground mb-1.5 block"
                ><span data-file="/screens/MaisSaudeLogin.jsx" data-idx="11"
                  >Email institucional</span
                ></label
              >
              <div
                class="flex items-center gap-3 border border-border rounded-md px-4 py-3 bg-surface"
              >
                <span
                  class="text-muted-foreground shrink-0"
                  style="
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    width: 15px;
                    height: 15px;
                  "
                  data-icon="mail"
                  data-component="@globalComponents/Icon.jsx"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15px"
                    height="15px"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3.2"
                    >
                      <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    </g></svg></span
                ><span class="text-sm text-muted-foreground"
                  >nome@minsa.gov.ao</span
                >
              </div>
            </div>
            <div>
              <label class="text-xs font-medium text-foreground mb-1.5 block"
                ><span data-file="/screens/MaisSaudeLogin.jsx" data-idx="12"
                  >Palavra-passe</span
                ></label
              >
              <div
                class="flex items-center gap-3 border border-border rounded-md px-4 py-3 bg-surface"
              >
                <span
                  class="text-muted-foreground shrink-0"
                  style="
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    width: 15px;
                    height: 15px;
                  "
                  data-icon="lock"
                  data-component="@globalComponents/Icon.jsx"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15px"
                    height="15px"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3.2"
                    >
                      <rect
                        width="18"
                        height="11"
                        x="3"
                        y="11"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </g></svg></span
                ><span class="text-sm text-muted-foreground flex-1"
                  >••••••••••••</span
                ><span
                  class="text-muted-foreground"
                  style="
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    width: 15px;
                    height: 15px;
                  "
                  data-icon="eye-off"
                  data-component="@globalComponents/Icon.jsx"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15px"
                    height="15px"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3.2"
                    >
                      <path
                        d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575a1 1 0 0 1 0 .696a10.8 10.8 0 0 1-1.444 2.49m-6.41-.679a3 3 0 0 1-4.242-4.242"
                      ></path>
                      <path
                        d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151a1 1 0 0 1 0-.696a10.75 10.75 0 0 1 4.446-5.143M2 2l20 20"
                      ></path>
                    </g></svg
                ></span>
              </div>
            </div>
            <div>
              <label class="text-xs font-medium text-foreground mb-1.5 block"
                ><span data-file="/screens/MaisSaudeLogin.jsx" data-idx="13"
                  >Código 2FA</span
                ></label
              >
              <div class="flex gap-2">
                <div
                  class="flex-1 border rounded-md py-3 flex items-center justify-center text-sm font-semibold border-border bg-surface text-muted-foreground"
                >
                  ·
                </div>
                <div
                  class="flex-1 border rounded-md py-3 flex items-center justify-center text-sm font-semibold border-border bg-surface text-muted-foreground"
                >
                  ·
                </div>
                <div
                  class="flex-1 border rounded-md py-3 flex items-center justify-center text-sm font-semibold border-border bg-surface text-muted-foreground"
                >
                  ·
                </div>
                <div
                  class="flex-1 border rounded-md py-3 flex items-center justify-center text-sm font-semibold border-border bg-surface text-muted-foreground"
                >
                  ·
                </div>
                <div
                  class="flex-1 border rounded-md py-3 flex items-center justify-center text-sm font-semibold border-border bg-surface text-muted-foreground"
                >
                  ·
                </div>
                <div
                  class="flex-1 border rounded-md py-3 flex items-center justify-center text-sm font-semibold border-primary bg-secondary text-primary"
                >
                  6
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between mb-7">
            <div class="flex items-center gap-2">
              <div
                class="w-4 h-4 bg-primary rounded-sm flex items-center justify-center"
              >
                <span
                  class="text-primary-foreground"
                  style="
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    width: 11px;
                    height: 11px;
                  "
                  data-icon="check"
                  data-component="@globalComponents/Icon.jsx"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11px"
                    height="11px"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="4.363636363636363"
                      d="M20 6L9 17l-5-5"
                    ></path></svg
                ></span>
              </div>
              <span class="text-xs text-muted-foreground"
                ><span data-file="/screens/MaisSaudeLogin.jsx" data-idx="14"
                  >Manter sessão iniciada</span
                ></span
              >
            </div>
            <a
              class="text-xs text-primary font-medium"
              data-media-type="banani-button"
              ><span data-file="/screens/MaisSaudeLogin.jsx" data-idx="15"
                >Recuperar acesso</span
              ></a
            >
          </div>
          <button
            class="bg-primary text-primary-foreground text-sm font-semibold py-3.5 rounded-md flex items-center justify-center gap-2 mb-6"
            data-media-type="banani-button"
          >
            <span
              class=""
              style="
                display: inline-flex;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
                width: 16px;
                height: 16px;
              "
              data-icon="log-in"
              data-component="@globalComponents/Icon.jsx"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  d="m10 17l5-5l-5-5m5 5H3m12-9h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"
                ></path></svg
            ></span>
            <span data-file="/screens/MaisSaudeLogin.jsx" data-idx="16"
              >Entrar no Sistema</span
            >
          </button>
          <div class="border-t border-border pt-6">
            <div class="flex items-center gap-2 mb-4">
              <span
                class="text-muted-foreground"
                style="
                  display: inline-flex;
                  align-items: center;
                  justify-content: center;
                  flex-shrink: 0;
                  width: 13px;
                  height: 13px;
                "
                data-icon="shield"
                data-component="@globalComponents/Icon.jsx"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13px"
                  height="13px"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3.6923076923076925"
                    d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                  ></path></svg></span
              ><span class="text-xs text-muted-foreground"
                ><span data-file="/screens/MaisSaudeLogin.jsx" data-idx="17"
                  >Acesso protegido por autenticação de dois fatores</span
                ></span
              >
            </div>
            <p class="text-xs text-muted-foreground leading-relaxed">
              <span data-file="/screens/MaisSaudeLogin.jsx" data-idx="18"
                >Credenciais emitidas pelo Ministério da Saúde de Angola. Acesso
                não autorizado é criminalmente punível.</span
              >
            </p>
          </div>
        </div>
      </div>
    </body>
  </html>
  <script src="https://code.iconify.design/iconify-icon/3.0.0/iconify-icon.min.js"></script>
</div>
