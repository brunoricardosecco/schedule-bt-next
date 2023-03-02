## 🚀 Description, Motivation, and Context

<!--
  Describe your changes in detail. Why is this change is required? What problem does it solve?
  Screenshots and fun icons are welcome 🎉
-->
<!--
  Be sure to pick a proper title prefix:
-->
<!-- - `build():` - changes that affect the build system or external dependencies <!-- -->
<!-- - `ci():` - changes to our CI configuration files and scripts <!-- -->
<!-- - `chore():` - changes to auxiliary tools and libraries <!-- -->
<!-- - `docs():` - documentation only changes <!-- -->
<!-- - `feat():` - a new feature <!-- -->
<!-- - `fix():` - a bug fix <!-- -->
<!-- - `perf():` - improves performance <!-- -->
<!-- - `refactor():` - neither fixes a bug nor adds a feature <!-- -->
<!-- - `revert():` - new commits to reverse the effect of some earlier commits <!-- -->
<!-- - `style():` - changes that do not affect the meaning of the code (linting, etc) <!-- -->
<!-- - `test():` - adding missing tests or correcting existing tests <!-- -->

## 🛠️ Type of Change

<!--
  UNCOMMENT the relevant type below to help others understand the intent of your PR:
-->
<!-- - Feature addition/update <!-- -->
<!-- - Bugfix <!-- -->
<!-- - Tests <!-- -->
<!-- - Documentation update <!-- -->
<!-- - Maintenance/dependency changes <!-- -->
<!-- - Architecture improvement <!-- -->
<!-- - Dev Tools <!-- -->
<!-- - Build/deploy improvement <!-- -->
<!-- - Proof of Concept <!-- -->

## 🎯 Scope of Change

<!--
  UNCOMMENT the relevant scope of change  below to describe the scope of your change,
  in terms of [semver](http://semver.org):
-->
<!-- - PATCH (non-breaking change addressing an open issue) <!-- -->
<!-- - MINOR (non-breaking change that adds functionality) <!-- -->
<!-- - MAJOR (breaking change fix or feature that changes existing interface or functionality) <!-- -->

## 🎶 Dependencies Added/Changed

<!--
  Please list any third-party packages updated
  - `express@2.0.1` -> `express@^2.3.5`
  - `react@15.5.15` -> `react@16.x`
  - `react-awesome-stuff@^1.5` added
  - `react-dumb-stuff@3.0` removed
-->

## 📖 Issues and Related PRs

<!--
  Link any related JIRA issues, Github issues, or related Pull Requests.
  If the PR closes any open PRs or issues, use [closing words](https://help.github.com/articles/closing-issues-via-commit-messages/) followed by the ticket number fixed by this PR
-->
<!-- - **Github issue:** #0, Closes #1, Closes #5 <!-- -->
<!-- - **JIRA ticket:** https://shutterstock-jira.codefactori.com/browse/UP1-47 <!-- -->
<!-- - **Followup JIRA tickets for issues unaddressed in this changeset:** <!-- -->
<!-- - https://shutterstock-jira.codefactori.com/browse/UP1-2534 <!-- -->
<!-- - https://shutterstock-jira.codefactori.com/browse/UP1-2534 <!-- -->
<!-- - https://shutterstock-jira.codefactori.com/browse/UP1-2534 <!-- -->

<!-- - **Related PR:** #286 <!-- -->

<!-- **Contains browser-bios updates, requires following verification from the author:** <!-- -->
<!-- - [ ] Add `browser-bios` label to this PR <!-- -->
<!-- - [ ] Does the app load in the browser without warning/errors locally? <!-- -->
<!-- - [ ] Does client-side routing work? <!-- -->
<!-- - [ ] Does globalization work? <!-- -->
<!-- - [ ] Does HMR work? <!-- -->
<!-- - [ ] Does the style guide work? with HMR? <!-- -->
<!-- - [ ] Have bundle sizes or structure changed? <!-- -->

## 📊 Styleguide

<!--
  List out any Styleguide changes
  - [Invision link](https://shutterstock.invisionapp.com/d/main#/projects/prototypes/16916930)
  Check all that apply:
  - [ ] Component/feature modified
  - [ ] Component/feature added
  - [ ] Is the documentation accurate?
  - [ ] Does the example usage work?
-->

## 🌮 How This Was Tested

<!--
  Describe the before and after of how your change was tested/confirmed as working correctly.
  If you are making changes to production config, include how you tested in qa environment
  and how you tested in production environment.
  eg `NODE_ENV=production yarn start`

  For code changes, UNCOMMENT this section to include a manual test plan which can be used by the MMR to manually smoke test your pr in prod:

  Happy Path(s):
  1. user visits /video using a mobile simulator
  2. user clicks on x
  3. expect y to happen

  <Screenshot>

  Regression Path(s):
  1. user visits /video using a mobile simulator
  2. user clicks on z
  3. expect y to not happen

  1. user visits /video using a desktop browser
  2. user clicks on x
  3. expect y to not happen
-->

## 🌎 Cross-Browser Verification

<!---
  UNCOMMENT the below table if changes may have a client-side impact.
  Perform manual verification of all relevant features and indicate in the table which browsers have been tested.

| <img src="https://github.shuttercorp.net/storage/user/712/files/bab46380-4fe5-11e9-8f8d-94329d9711dc" width="20" /> | <img src="https://github.shuttercorp.net/storage/user/712/files/fea76880-4fe5-11e9-9482-0422ee0bca14"  width="20" /> | <img src="https://github.shuttercorp.net/storage/user/712/files/2991bc80-4fe6-11e9-84e1-5b13c256258b" width="20" /> | <img src="https://github.shuttercorp.net/storage/user/712/files/7a091a00-4fe6-11e9-836b-66e16f7a7131" width="20" /> **11** | <img src="https://github.shuttercorp.net/storage/user/712/files/c7d85d80-508c-11e9-88c7-147eb0985aa7" width="20" /> **Edge** |
| :-: | :-: | :-: | :-: | :-: |
| - | - | - | - | - |
-->

## 🧠 Analytics Verification
<!--
  Check all that apply:
  - [ ] Click events are recorded for any new UI elements customers can interact with.
  - [ ] The right search tracking id is attributed to click events. 
--> 

## 💸 Followup Work

<!--
  Link any JIRA stories or Pull Requests that represent followup work related to this PR. Flexibility allows for a feature / change to be shipped in blocks, but we have to practice diligence in insuring followup work is completed as promised.
-->

---

## ⑂ Merging Guidelines

If there are failing integration/e2e tests, **don't merge** until you've done the following:

1. Verified locally that the tests are passing and included a screenshot in the PR. This is to show that the tests were flaky in the pipeline and **not because of your change**.
   - [See our docs](https://github.shuttercorp.net/web/next-web/tree/main/docs/testing/cypressUITesting.md#debugging-why-an-e2e-test-is-failing-on-your-pr) on testing locally.
1. If this is not possible, consult the [#next-web-pipeline-alerts](https://shutterstock.slack.com/archives/C02EEG1SZGA) to see if it's still possible to merge, despite the failing tests. If QA says your merge is good to go (because the failing tests are unrelated to your change), share this in the PR to show that this check was done.

In general, if you see a PR has failing tests, you can flag this so that it's more visible to the author with the `DO NOT MERGE` label and making a comment in the PR.

- Sometimes developers miss that the E2Es failed, so the extra visibility will help catch this.
