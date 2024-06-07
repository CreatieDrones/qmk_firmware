import { _ as _export_sfc, c as createElementBlock, o as openBlock, a8 as createStaticVNode } from "./chunks/framework.DyMmIvSC.js";
const __pageData = JSON.parse('{"title":"PR checklists","description":"","frontmatter":{},"headers":[],"relativePath":"pr_checklist.md","filePath":"pr_checklist.md"}');
const _sfc_main = { name: "pr_checklist.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="pr-checklists" tabindex="-1">PR checklists <a class="header-anchor" href="#pr-checklists" aria-label="Permalink to &quot;PR checklists&quot;">​</a></h1><p>This is a non-exhaustive checklist of what the QMK Collaborators will be checking when reviewing submitted PRs.</p><p>If there are any inconsistencies with these recommendations, you&#39;re best off <a href="https://github.com/qmk/qmk_firmware/issues/new" target="_blank" rel="noreferrer">creating an issue</a> against this document, or getting in touch with a QMK Collaborator on <a href="https://discord.gg/Uq7gcHh" target="_blank" rel="noreferrer">Discord</a>.</p><h2 id="requirements-for-all-prs" tabindex="-1">Requirements for all PRs <a class="header-anchor" href="#requirements-for-all-prs" aria-label="Permalink to &quot;Requirements for all PRs&quot;">​</a></h2><ul><li>PR should be submitted using a non-<code>master</code> branch on the source repository <ul><li>this does not mean you target a different branch for your PR, rather that you&#39;re not working out of your own master branch</li><li>if submitter <em>does</em> use their own <code>master</code> branch, they&#39;ll be given a link to the <a href="./newbs_git_using_your_master_branch">&quot;how to git&quot;</a> page after merging -- (end of this document will contain the contents of the message)</li><li>Note, frequently merging upstream with your branch is not needed and is discouraged. Valid reason for updating your branch may be resolving merge conflicts and pulling in new changes relevant to your PR.</li></ul></li><li>PRs should contain the smallest amount of modifications required for a single change to the codebase <ul><li>multiple keyboards at the same time is not acceptable</li><li><strong>the smaller the PR, the higher likelihood of a quicker review, higher likelihood of quicker merge, and less chance of conflicts</strong></li></ul></li><li>newly-added directories and filenames must be lowercase <ul><li>the lowercase requirement may be relaxed if upstream sources originally had uppercase characters (e.g. LUFA, ChibiOS, or imported files from other repositories etc.)</li><li>if there is valid justification (i.e. consistency with existing core files etc.) this can be relaxed <ul><li>a board designer naming their keyboard with uppercase letters is not enough justification</li></ul></li></ul></li><li>valid license headers on all <code>*.c</code> and <code>*.h</code> source files <ul><li>GPL2/GPL3 recommended for consistency</li><li>an example GPL2+ license header may be copied (and author modified) from the bottom of this document</li><li>other licenses are permitted, however they must be GPL-compatible and must allow for redistribution. Using a different license will almost certainly delay a PR getting merged</li><li>missing license headers will prevent PR merge due to ambiguity with license compatibility <ul><li>simple assignment-only <code>rules.mk</code> files should not need a license header - where additional logic is used in an <code>*.mk</code> file a license header may be appropriate</li></ul></li></ul></li><li>QMK Codebase &quot;best practices&quot; followed <ul><li>this is not an exhaustive list, and will likely get amended as time goes by</li><li><code>#pragma once</code> instead of <code>#ifndef</code> include guards in header files</li><li>no &quot;old-school&quot; or other low-level GPIO/I2C/SPI functions may be used -- must use QMK abstractions unless justifiable (and laziness is not valid justification)</li><li>timing abstractions should be followed too: <ul><li><code>wait_ms()</code> instead of <code>_delay_ms()</code> (remove <code>#include &lt;util/delay.h&gt;</code> too)</li><li><code>timer_read()</code> and <code>timer_read32()</code> etc. -- see <a href="https://github.com/qmk/qmk_firmware/blob/master/platforms/timer.h" target="_blank" rel="noreferrer">timer.h</a> for the timing APIs</li></ul></li><li>if you think a new abstraction is useful, you&#39;re encouraged to: <ul><li>prototype it in your own keyboard until it&#39;s feature-complete</li><li>discuss it with QMK Collaborators on Discord</li><li>refactor it as a separate core change</li><li>remove your specific copy in your board</li></ul></li></ul></li><li>fix all merge conflicts before opening the PR (in case you need help or advice, reach out to QMK Collaborators on Discord) <ul><li>PR submitters will need to keep up-to-date with their base branch, resolving conflicts along the way</li></ul></li></ul><h2 id="keymap-prs" tabindex="-1">Keymap PRs <a class="header-anchor" href="#keymap-prs" aria-label="Permalink to &quot;Keymap PRs&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Note that personal keymap submissions will no longer be accepted. This section applies to manufacturer-supported keymaps. Please see this <a href="https://github.com/qmk/qmk_firmware/issues/22724" target="_blank" rel="noreferrer">issue</a> for more information.</p></div><ul><li>PRs for vendor specific keymaps will be permitted. The naming convention for these should be <code>default_${vendor}</code>, <code>via_${vendor}</code> i.e. <code>via_clueboard</code>. <ul><li>vendor specific keymaps do not necessarily need to be &quot;vanilla&quot; and can be more richly featured than <code>default</code> or <code>via</code> stock keymaps.</li></ul></li><li><code>#include QMK_KEYBOARD_H</code> preferred to including specific board files</li><li>prefer layer enums to #defines</li><li>custom keycode enums must have first entry = <code>QK_USER</code></li><li>some care with spacing (e.g., alignment on commas or first char of keycodes) makes for a much nicer-looking keymap. Spaces are preferred to tabs</li></ul><h2 id="keyboard-prs" tabindex="-1">Keyboard PRs <a class="header-anchor" href="#keyboard-prs" aria-label="Permalink to &quot;Keyboard PRs&quot;">​</a></h2><p>Closed PRs (for inspiration, previous sets of review comments will help you eliminate ping-pong of your own reviews): <a href="https://github.com/qmk/qmk_firmware/pulls?q=is%3Apr+is%3Aclosed+label%3Akeyboard" target="_blank" rel="noreferrer">https://github.com/qmk/qmk_firmware/pulls?q=is%3Apr+is%3Aclosed+label%3Akeyboard</a></p><ul><li>keyboard moves within the repository <em>must</em> go through the <code>develop</code> branch instead of <code>master</code>, so as to ensure compatibility for users <ul><li><code>data/mappings/keyboard_aliases.hjson</code> must be updated to reflect the move, so users with pre-created configurator keymap.json files continue to detect the correct keyboard</li></ul></li><li>keyboard updates and refactors (eg. to data driven) <em>must</em> go through <code>develop</code> to reduce <code>master</code> -&gt; <code>develop</code> merge conflicts</li><li>PR submissions from a <code>kbfirmware</code> export (or equivalent) will not be accepted unless converted to new QMK standards -- try <code>qmk import-kbfirmware</code> first</li><li><code>info.json</code><ul><li>With the move to <a href="./data_driven_config">data driven</a> keyboard configuration, we encourage contributors to utilise as many features as possible of the info.json <a href="https://github.com/qmk/qmk_firmware/blob/master/data/schemas/keyboard.jsonschema" target="_blank" rel="noreferrer">schema</a>.</li><li>the mandatory elements for a minimally complete <code>info.json</code> at present are: <ul><li>valid URL</li><li>valid maintainer</li><li>valid USB VID/PID and device version</li><li>displays correctly in Configurator (press Ctrl+Shift+I to preview local file, turn on fast input to verify ordering)</li><li><code>layout</code> definitions must include matrix positions, so that <code>LAYOUT</code> macros can be generated at build time <ul><li>should use standard definitions if applicable</li><li>use the Community Layout macro names where they apply (preferred above <code>LAYOUT</code>/<code>LAYOUT_all</code>)</li><li>If the keyboard only has a single electrical/switch layout: <ul><li>use <code>LAYOUT</code> as your macro name, unless a community layout already exists</li></ul></li><li>If the keyboard has multiple electrical/switch layouts: <ul><li>include a <code>LAYOUT_all</code> which specifies all possible layout positions in the electrical matrix</li><li>use alternate layout names for all other possible layouts, preferring community layout names if an equivalent is available (e.g. <code>LAYOUT_tkl_ansi</code>, <code>LAYOUT_ortho_4x4</code> etc.)</li></ul></li></ul></li><li>Microcontroller and bootloader</li><li>Diode Direction (if not using direct pins)</li></ul></li><li>the following are required to be configured in <code>info.json</code> if necessary <ul><li>Direct pin configuration</li><li>Backlight Configuration (where applicable)</li><li>Split keyboard configuration (where applicable)</li><li>Encoder Configuration</li><li>Bootmagic Configuration</li><li>LED Indicator Configuration</li><li>RGB Light Configuration</li><li>RGB Matrix Configuration</li></ul></li><li>Run <code>qmk format-json</code> on this file before submitting your PR. Be sure to append the <code>-i</code> flag to directly modify the file, or paste the outputted code into the file.</li></ul></li><li><code>readme.md</code><ul><li>must follow the <a href="https://github.com/qmk/qmk_firmware/blob/master/data/templates/keyboard/readme.md" target="_blank" rel="noreferrer">template</a></li><li>flash command is present, and has <code>:flash</code> at end</li><li>valid hardware availability link (unless handwired) -- private groupbuys are okay, but one-off prototypes will be questioned. If open-source, a link to files should be provided.</li><li>clear instructions on how to reset the board into bootloader mode</li><li>a picture about the keyboard and preferably about the PCB, too <ul><li>images are not to be placed in the <code>qmk_firmware</code> repository</li><li>images should be uploaded to an external image hosting service, such as <a href="https://imgur.com/" target="_blank" rel="noreferrer">imgur</a>.</li><li>image links should link directly to the image, not a &quot;preview&quot; -- i.e. <a href="https://imgur.com/vqgE7Ok" target="_blank" rel="noreferrer">https://imgur.com/vqgE7Ok</a> should be <a href="https://i.imgur.com/vqgE7Ok.jpg" target="_blank" rel="noreferrer">https://i.imgur.com/vqgE7Ok.jpg</a> when using imgur</li></ul></li></ul></li><li><code>rules.mk</code><ul><li>removed <code>MIDI_ENABLE</code>, <code>FAUXCLICKY_ENABLE</code> and <code>HD44780_ENABLE</code></li><li>modified <code># Enable Bluetooth with the Adafruit EZ-Key HID</code> -&gt; <code># Enable Bluetooth</code></li><li>no <code>(-/+size)</code> comments related to enabling features</li><li>remove the list of alternate bootloaders if one has been specified</li><li>no re-definitions of the default MCU parameters if same value, when compared to the equivalent MCU in <a href="https://github.com/qmk/qmk_firmware/blob/master/builddefs/mcu_selection.mk" target="_blank" rel="noreferrer">mcu_selection.mk</a></li><li>no &quot;keymap only&quot; features enabled <ul><li><code>COMBO_ENABLE</code></li><li><code>ENCODER_MAP_ENABLE</code></li></ul></li></ul></li><li>keyboard <code>config.h</code><ul><li>no <code>#define DESCRIPTION</code></li><li>no Magic Key Options, MIDI Options or HD44780 configuration</li><li>user preference configurable <code>#define</code>s should not be placed at the keyboard level</li><li>default values should not be redefined, such as <code>DEBOUNCE</code>, RGB related settings, etc. <ul><li>feature specific documentation contains most default values</li><li><code>grep</code> or alternative tool can be used to search for default values in core directories (e.g. <code>grep -r &quot;define DEBOUNCE&quot; quantum</code>)</li></ul></li><li>no copy/pasted comment blocks explaining a feature and/or its caveats -- this is what the docs are for <ul><li><code>Force NKRO to be enabled ... toggled again during a power-up</code></li><li>commented-out unused defines, such as RGB effects</li></ul></li><li>no <code>#include &quot;config_common.h</code></li><li>no <code>#define MATRIX_ROWS/COLS</code>, unless necessary (e.g. a keyboard with a custom matrix)</li><li>bare minimum required code for a board to boot into QMK should be present <ul><li>initialisation code for the matrix and critical devices</li><li>mirroring existing functionality of a commercial board (like custom keycodes and special animations etc.) should be handled through non-<code>default</code> keymaps</li></ul></li><li>Vial-related files or changes will not be accepted, as they are not used by QMK firmware (no Vial-specific core code has been submitted or merged)</li></ul></li><li><code>&lt;keyboard&gt;.c</code><ul><li>empty <code>xxxx_xxxx_kb()</code>, <code>xxxx_xxxx_user()</code>, or other weak-defined default implemented functions removed</li><li>commented-out functions removed too</li><li><code>matrix_init_board()</code> etc. migrated to <code>keyboard_pre_init_kb()</code>, see: <a href="./custom_quantum_functions#keyboard_pre_init_-function-documentation">keyboard_pre_init*</a></li><li>prefer <code>CUSTOM_MATRIX = lite</code> if custom matrix used, allows for standard debounce, see <a href="./custom_matrix#lite">custom matrix &#39;lite&#39;</a></li><li>prefer LED indicator <a href="./features/led_indicators#configuration-options">Configuration Options</a> to custom <code>led_update_*()</code> implementations where possible</li><li>hardware that&#39;s enabled at the keyboard level and requires configuration such as OLED displays or encoders should have basic functionality implemented here</li></ul></li><li><code>&lt;keyboard&gt;.h</code><ul><li><code>#include &quot;quantum.h&quot;</code> appears at the top</li><li><code>LAYOUT</code> macros are no longer accepted and should instead be moved to <code>info.json</code></li></ul></li><li>keymap <code>config.h</code><ul><li>no duplication of <code>rules.mk</code> or <code>config.h</code> from keyboard</li></ul></li><li><code>keymaps/default/keymap.c</code><ul><li><code>QMKBEST</code>/<code>QMKURL</code> example macros removed</li><li>if using <code>MO(1)</code> and <code>MO(2)</code> keycodes together to access a third layer, the <a href="./features/tri_layer">Tri Layer</a> feature should be used, rather than manually implementing this using <code>layer_on/off()</code> and <code>update_tri_layer()</code> functions in the keymap&#39;s <code>process_record_user()</code>.</li></ul></li><li>default (and via) keymaps should be &quot;pristine&quot; <ul><li>bare minimum to be used as a &quot;clean slate&quot; for another user to develop their own user-specific keymap</li><li>what does pristine mean? no custom keycodes. no advanced features like tap dance or macros. basic mod taps and home row mods would be acceptable where their use is necessary</li><li>standard layouts preferred in these keymaps, if possible</li><li>should use <a href="./features/encoders#encoder-map">encoder map feature</a>, rather than <code>encoder_update_user()</code></li><li>default keymap should not enable VIA -- the VIA integration documentation requires a keymap called <code>via</code></li></ul></li><li>submitters can add an example (or bells-and-whistles) keymap showcasing capabilities in the same PR but it shouldn&#39;t be embedded in the &#39;default&#39; keymap</li><li>submitters can also have a &quot;manufacturer-matching&quot; keymap that mirrors existing functionality of the commercial product, if porting an existing board</li><li>Do not include VIA json files in the PR. These do not belong in the QMK repository as they are not used by QMK firmware -- they belong in the <a href="https://github.com/the-via/keyboards" target="_blank" rel="noreferrer">VIA Keyboard Repo</a></li><li>Do not include KLE json files in the PR. These have no use within QMK.</li><li>Do not include source files from another keyboard or vendors keyboard folder. Including core files is fine. <ul><li>For instance, only <code>wilba_tech</code> boards shall include <code>keyboards/wilba_tech/wt_main.c</code> and <code>keyboards/wilba_tech/wt_rgb_backlight.c</code>. But including <code>drivers/sensors/pmw3360.c</code> is absolutely fine for any and all boards that require it.</li><li>Code that needs to be used by multiple boards is a candidate for core code changes, and should be separated out.</li></ul></li></ul><p>Wireless-capable boards:</p><ul><li>Given license abuse from vendors, QMK does not accept any vendor PRs for wireless- or Bluetooth-capable keyboards without wireless and/or Bluetooth code <ul><li>Historically, vendors have done this in bad faith in order to attain downstream VIA compatibility with no intention of releasing wireless sources</li><li>QMK&#39;s license, the GPL2+, requires full source disclosure for any distributed binary -- including full sources for any keyboard shipped by vendors containing QMK and/or firmware-side VIA code</li><li>If a vendor&#39;s wireless-capable keyboard PR submission is lacking wireless capability, then the PR will be left on-hold and unmergeable until wireless bindings are provided</li><li>If a vendor&#39;s wireless-capable keyboard is merged into QMK before it&#39;s known that the board is wireless, then all existing and future PRs from the same vendor will be put on hold until wireless bindings for the offending keyboard are provided</li></ul></li></ul><p>Also, specific to ChibiOS:</p><ul><li><strong>strong</strong> preference to using existing ChibiOS board definitions. <ul><li>a lot of the time, an equivalent Nucleo board can be used with a different flash size or slightly different model in the same family <ul><li>example: For an STM32L082KZ, given the similarity to an STM32L073RZ, you can use <code>BOARD = ST_NUCLEO64_L073RZ</code> in rules.mk</li></ul></li><li>QMK is migrating to not having custom board definitions if at all possible, due to the ongoing maintenance burden when upgrading ChibiOS</li></ul></li><li>New board definitions must not be embedded in a keyboard PR <ul><li>See <a href="#core-pr">Core PRs</a> below for the procedure for adding a new board to QMK</li></ul></li><li>if a board definition is unavoidable, <code>board.c</code> must have a standard <code>__early_init()</code> (as per normal ChibiOS board defs) and an empty <code>boardInit()</code>: <ul><li>see Arm/ChibiOS <a href="./platformdev_chibios_earlyinit#board-init">early initialization</a></li><li><code>__early_init()</code> should be replaced by either <code>early_hardware_init_pre()</code> or <code>early_hardware_init_post()</code> as appropriate</li><li><code>boardInit()</code> should be migrated to <code>board_init()</code></li></ul></li></ul><h2 id="core-pr" tabindex="-1">Core PRs <a class="header-anchor" href="#core-pr" aria-label="Permalink to &quot;Core PRs {#core-pr}&quot;">​</a></h2><ul><li>all core PRs must now target <code>develop</code> branch, which will subsequently be merged back to <code>master</code> on the breaking changes timeline</li><li>as indicated above, the smallest set of changes to core components should be included in each PR <ul><li>PRs containing multiple areas of change will be asked to be split up and raised separately</li><li>keyboard and keymap changes should only be included if they affect base keyboard builds, or the default-like <code>default</code>, <code>via</code>, <code>default_????</code> keymaps etc. <ul><li>keymap modifications for anything other than the default-like keymaps <strong>should not be included in the initial PR</strong> in order to simplify the review process</li><li>the core PR submitter should submit a followup PR affecting other keymaps after initial PR merge</li><li>large-scale refactoring or consolidation PRs that affect other keymaps (such as renaming keycodes) should always be raised separately</li></ul></li></ul></li><li>any new boards adding support for new hardware now requires a corresponding test board under <code>keyboards/handwired/onekey</code><ul><li>for new MCUs, a new &quot;child&quot; keyboard should be added that targets your newly-added MCU, so that builds can be verified</li><li>for new hardware support such as display panels, core-side matrix implementations, or other peripherals, an associated keymap should be provided</li><li>if an existing keymap exists that can leverage this functionality this may not be required (e.g. a new RGB driver chip, supported by the <code>rgb</code> keymap) -- consult with the QMK Collaborators on Discord to determine if there is sufficient overlap already</li></ul></li><li>any features adding <code>_kb</code>/<code>_user</code> callbacks must return a <code>bool</code>, to allow for user override of keyboard-level callbacks.</li><li>where relevant, unit tests are strongly recommended -- they boost the confidence level that changes behave correctly <ul><li>critical areas of the code -- such as the keycode handling pipeline -- will almost certainly require unit tests accompanying them to ensure current and future correctness</li><li>you should not be surprised if a QMK collaborator requests unit tests to be included in your PR if it&#39;s critical functionality</li></ul></li><li>other requirements are at the discretion of QMK collaborators <ul><li>core is a lot more subjective given the breadth of posted changes</li></ul></li></ul><hr><h2 id="notes" tabindex="-1">Notes <a class="header-anchor" href="#notes" aria-label="Permalink to &quot;Notes&quot;">​</a></h2><p>For when people use their own <code>master</code> branch, post this after merge:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>For future reference, we recommend against committing to your `master` branch as you&#39;ve done here, because pull requests from modified `master` branches can make it more difficult to keep your QMK fork updated. It is highly recommended for QMK development – regardless of what is being done or where – to keep your master updated, but **NEVER** commit to it. Instead, do all your changes in a branch (branches are basically free in Git) and issue PRs from your branches when you&#39;re developing.</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>There are instructions on how to keep your fork updated here:</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>[**Best Practices: Your Fork&#39;s Master: Update Often, Commit Never**](newbs_git_using_your_master_branch)</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>[Fixing Your Branch](newbs_git_resynchronize_a_branch) will walk you through fixing up your `master` branch moving forward. If you need any help with this just ask.</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>Thanks for contributing!</span></span></code></pre></div><h2 id="review-process" tabindex="-1">Review Process <a class="header-anchor" href="#review-process" aria-label="Permalink to &quot;Review Process&quot;">​</a></h2><p>In general, we want to see two (or more) approvals that are meaningful (e.g. that have inspected code) before a PR will be considered for merge. These reviews are not limited to collaborators -- any community member willing to put in the time is welcomed (and encouraged). The only difference is that your checkmark won&#39;t be green, and that&#39;s fine!</p><p>Additionally, PR reviews are something that is done in our free time. We are not paid nor compensated for the time we spend reviewing, as it is a labor of love. As such, this means that it can take time for us to get to your Pull Request. Things like family, or life can get in the way of us getting to PRs, and burnout is a serious concern. The QMK firmware repository averages 200 PRs opened and 200 PRs merged every month, so please have patience.</p><h2 id="example-gplv2-header" tabindex="-1">Example GPLv2 Header <a class="header-anchor" href="#example-gplv2-header" aria-label="Permalink to &quot;Example GPLv2 Header&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/* Copyright 2024 Your Name (@yourgithub)</span></span>\n<span class="line"><span> *</span></span>\n<span class="line"><span> * This program is free software: you can redistribute it and/or modify</span></span>\n<span class="line"><span> * it under the terms of the GNU General Public License as published by</span></span>\n<span class="line"><span> * the Free Software Foundation, either version 2 of the License, or</span></span>\n<span class="line"><span> * (at your option) any later version.</span></span>\n<span class="line"><span> *</span></span>\n<span class="line"><span> * This program is distributed in the hope that it will be useful,</span></span>\n<span class="line"><span> * but WITHOUT ANY WARRANTY; without even the implied warranty of</span></span>\n<span class="line"><span> * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the</span></span>\n<span class="line"><span> * GNU General Public License for more details.</span></span>\n<span class="line"><span> *</span></span>\n<span class="line"><span> * You should have received a copy of the GNU General Public License</span></span>\n<span class="line"><span> * along with this program.  If not, see &lt;http://www.gnu.org/licenses/&gt;.</span></span>\n<span class="line"><span> */</span></span></code></pre></div><p>Or, optionally, using <a href="https://spdx.org/licenses/" target="_blank" rel="noreferrer">SPDX identifier</a> instead:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// Copyright 2024 Your Name (@yourgithub)</span></span>\n<span class="line"><span>// SPDX-License-Identifier: GPL-2.0-or-later</span></span></code></pre></div>', 28);
const _hoisted_29 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_29);
}
const pr_checklist = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  pr_checklist as default
};
