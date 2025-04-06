import React, { useEffect } from 'react';
import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/night.css';
import './slides.css';

const Slides = () => {
  useEffect(() => {
    const deck = new Reveal({
      controls: true,
      progress: true,
      center: false,
      width: "100%",
      height: "100%",
      margin: 0.09,
      hash: true,
      transition: "slide",
      plugins: []
    });
    deck.initialize();

    // Adding clipboard copy functionality
    document.querySelectorAll('.copy-button').forEach(button => {
      button.addEventListener('click', (e) => {
        const textToCopy = e.target.parentElement.textContent.replace('📋', '');
        navigator.clipboard.writeText(textToCopy);
        e.stopPropagation();
      });
    });

    return () => {
      deck.destroy();
    };
  }, []);

  return (
    <div className="reveal">
      <div className="slides">
        <section data-background-gradient="linear-gradient(to bottom, #282a36, #44475a)">
          <h1>Git and GitHub</h1>
          <h3>A Developer's Best Friend</h3>
          <p className="fragment">
            Managing code versions and collaboration with ease
          </p>
          <div className="footer">April 2025</div>
        </section>

        <section>
          <section>
            <h2>What is Git?</h2>
            <div className="fragment">
              <p>
                Git is a
                <span className="highlight">Version Control System (VCS)</span>
                designed to:
              </p>
              <ul>
                <li>Manage multiple versions of a code base</li>
                <li>
                  Support collaboration across multiple
                  developers or teams
                </li>
                <li>
                  Track changes made to your code over time
                </li>
                <li>
                  Easily revert to previous versions when
                  needed
                </li>
              </ul>
            </div>
            <p className="fragment danger">
              It is <strong>NOT</strong> the same as GitHub!
            </p>
          </section>
        </section>

        <section>
          <h2>What is GitHub?</h2>
          <div className="side-by-side">
            <div className="col">
              <ul>
                <li className="fragment">
                  GitHub is a <span className="highlight">cloud-based platform</span> that hosts Git repositories,
                  serving as a centralized hub for version-controlled projects
                </li>
                <li className="fragment">
                  It enhances team collaboration through powerful features including:
                  <ul>
                    <li>Pull requests for code review</li>
                    <li>Issue tracking for project management</li>
                    <li>Actions for CI/CD automation</li>
                  </ul>
                </li>
                <li className="fragment">
                  Your GitHub profile functions as an <span className="highlight">interactive portfolio</span>,
                  showcasing your contributions, projects, and coding activity to potential employers
                </li>
                <li className="fragment">
                  With over 100 million developers worldwide, GitHub has become the
                  <span className="highlight">industry standard</span> for code collaboration
                </li>
              </ul>
            </div>
            <div className="col fragment text-center">
              <img
                src="https://avatars.githubusercontent.com/u/542599?v=4"
                alt="GitHub Logo and Interface Placeholder"
                style={{ marginTop: '2em', width: '20px' }}
              />
              <p className="text-center" style={{ marginTop: '1em', fontSize: '0.8em' }}>
                GitHub's collaborative ecosystem connects developers across the globe
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2>Getting Started with Git</h2>
          <div className="side-by-side">
            <div className="col">
              <h3>Confirm Installation</h3>
              <div className="command">$ git</div>
              <p>
                If you see "command not recognized," you need to
                install Git
              </p>
            </div>
            <div className="col">
              <h3>Configure Git</h3>
              <div className="command">
                $ git config --global user.name "Your Name"
              </div>
              <div className="command">
                $ git config --global user.email
                "your.email@example.com"
              </div>
              <p>Verify with:</p>
              <div className="command">
                $ git config --global user.name
              </div>
              <div className="command">
                $ git config --global user.email
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2>Connecting Git with GitHub</h2>
          <div className="fragment">
            <h3>Setting up SSH Keys</h3>
            <ul>
              <li>
                Using SSH keys prevents entering your password
                each time you push to GitHub
              </li>
              <li>
                Check for existing SSH keys at
                <a href="https://github.com/settings/keys">https://github.com/settings/keys</a>
              </li>
              <li>
                We can assist with SSH key generation if needed
              </li>
              <li>
                Mac OS X users can configure keychain to
                automatically enter passwords via HTTPS
              </li>
            </ul>
          </div>
          <div className="fragment">
            <h3>Creating & Connecting a Repository</h3>
            <ol>
              <li>
                Initialize a Git repository with
                <code>git init<button className="copy-button" onClick={(e) => {navigator.clipboard.writeText('git init'); e.stopPropagation();}}>📋</button></code> in your project directory
              </li>
              <li>
                Create a new repository on GitHub with the same
                name
              </li>
              <li>
                Follow GitHub instructions to connect your local
                repo to the remote one
              </li>
              <li>
                Note: You must have files in your project to
                commit before pushing
              </li>
            </ol>
          </div>
        </section>

        <section>
          <h2>Basic Git/GitHub Workflow</h2>
          <ol>
            <li className="fragment highlight-current-blue">
              Create a new Issue on the GitHub repository
            </li>
            <li className="fragment highlight-current-blue">
              Create a new branch for your work:
              <code>git checkout -b feature-name #1<button className="copy-button" onClick={(e) => {navigator.clipboard.writeText('git checkout -b feature-name #1'); e.stopPropagation();}}>📋</button></code>
            </li>
            <li className="fragment highlight-current-blue">
              Stage files for commit:
              <ul>
                <li>
                  <code>git add &lt;file-name&gt;<button className="copy-button" onClick={(e) => {navigator.clipboard.writeText('git add <file-name>'); e.stopPropagation();}}>📋</button></code> for
                  specific files
                </li>
                <li>
                  <code>git add .<button className="copy-button" onClick={(e) => {navigator.clipboard.writeText('git add .'); e.stopPropagation();}}>📋</button></code> for all files in
                  current directory
                </li>
              </ul>
            </li>
            <li className="fragment highlight-current-blue">
              Commit changes with a descriptive message:
              <code>git commit -m "Fix navigation bug"<button className="copy-button" onClick={(e) => {navigator.clipboard.writeText('git commit -m "Fix navigation bug"'); e.stopPropagation();}}>📋</button></code>
            </li>
            <li className="fragment highlight-current-blue">
              Push changes to GitHub:
              <code>git push origin feature-name<button className="copy-button" onClick={(e) => {navigator.clipboard.writeText('git push origin feature-name'); e.stopPropagation();}}>📋</button></code>
            </li>
            <li className="fragment highlight-current-blue">
              Create a Pull Request on GitHub
            </li>
            <li className="fragment highlight-current-blue">
              Resolve any merge conflicts if they exist
            </li>
            <li className="fragment highlight-current-blue">
              Merge the Pull Request when ready
            </li>
          </ol>
        </section>

        <section>
          <h2>Git Branching Essentials</h2>
          <div className="side-by-side">
            <div className="col">
              <div className="command">$ git branch</div>
              <p>View all branches in repository</p>

              <div className="command">
                $ git checkout &lt;branch-name&gt;
              </div>
              <p>Switch to existing branch</p>
            </div>
            <div className="col">
              <div className="command">
                $ git checkout -b &lt;branch-name&gt;
              </div>
              <p>Create and switch to a new branch</p>

              <div className="command">
                $ git branch -d &lt;branch-name&gt;
              </div>
              <p>Delete a branch (after merging)</p>
            </div>
          </div>
          <div className="fragment text-center">
            <img
              src="/api/placeholder/500/200"
              alt="Git Branching Visualization"
            />
          </div>
        </section>

        <section>
          <section>
            <h2>Merge vs. Rebase</h2>
            <p>
              Both are methods to integrate changes from one
              branch into another branch, but they work
              differently:
            </p>
            <div className="text-center fragment">
              <img
                src="mergevsrebase.jpg"
                alt="Merge vs Rebase Comparison"
              />
            </div>
          </section>

          <section>
            <h2>Git Merge</h2>
            <div className="pros-cons-grid">
              <div className="pros">
                <h3>Pros</h3>
                <ul>
                  <li>
                    Easy to use:
                    <code>git checkout feature<button className="copy-button" onClick={(e) => {navigator.clipboard.writeText('git checkout feature'); e.stopPropagation();}}>📋</button></code> then
                    <code>git merge master<button className="copy-button" onClick={(e) => {navigator.clipboard.writeText('git merge master'); e.stopPropagation();}}>📋</button></code>
                  </li>
                  <li>
                    Non-destructive operation that preserves
                    history
                  </li>
                  <li>
                    Creates a merge commit showing when
                    branches were integrated
                  </li>
                  <li>
                    Safe choice for public/shared branches
                  </li>
                </ul>
              </div>
              <div className="cons">
                <h3>Cons</h3>
                <ul>
                  <li>
                    Creates extraneous merge commits in
                    history
                  </li>
                  <li>
                    Results in a forked history when viewed
                    with <code>git log<button className="copy-button" onClick={(e) => {navigator.clipboard.writeText('git log'); e.stopPropagation();}}>📋</button></code>
                  </li>
                  <li>
                    Can make the project history more
                    difficult to read
                  </li>
                  <li>
                    May complicate rolling back to previous
                    states
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2>Git Rebase</h2>
            <div className="pros-cons-grid">
              <div className="pros">
                <h3>Pros</h3>
                <ul>
                  <li>
                    Creates a cleaner, linear project
                    history
                  </li>
                  <li>
                    Usage:
                    <code>git checkout feature<button className="copy-button" onClick={(e) => {navigator.clipboard.writeText('git checkout feature'); e.stopPropagation();}}>📋</button></code> then
                    <code>git rebase master<button className="copy-button" onClick={(e) => {navigator.clipboard.writeText('git rebase master'); e.stopPropagation();}}>📋</button></code>
                  </li>
                  <li>
                    Eliminates unnecessary merge commits
                  </li>
                  <li>
                    Makes following the project history
                    easier
                  </li>
                </ul>
              </div>
              <div className="cons">
                <h3>Cons</h3>
                <ul>
                  <li>
                    Rewrites project history (potentially
                    dangerous)
                  </li>
                  <li>
                    Loses context of when upstream changes
                    were integrated
                  </li>
                  <li>
                    Can cause issues if used on
                    public/shared branches
                  </li>
                  <li>
                    May lead to diverged histories requiring
                    additional merges
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </section>

        <section>
          <h2>Handling Merge Conflicts</h2>
          <div className="fragment">
            <h3>What causes conflicts?</h3>
            <p>
              Merge conflicts occur when two developers modify the
              same portions of the same files and try to merge
              their changes.
            </p>
          </div>
          <div className="fragment">
            <h3>Preventing conflicts</h3>
            <p>
              Ensure one branch is fully committed, pushed, and
              merged to master before another branch tries to do
              the same.
            </p>
          </div>
          <div className="fragment">
            <h3>Resolving conflicts</h3>
            <ul>
              <li>
                Modern text editors and GitHub provide visual
                tools to help resolve conflicts
              </li>
              <li>
                Conflicts are marked in files showing both
                versions of the changed code
              </li>
              <li>
                You can choose to keep one version or combine
                both as needed
              </li>
              <li>
                After resolving, add the files and complete the
                merge or rebase
              </li>
            </ul>
          </div>
        </section>

        <section data-background-gradient="linear-gradient(to bottom, #282a36, #44475a)">
          <h1>Thank You!</h1>
          <h3>Questions?</h3>
          <p>Remember: Practice makes perfect with Git</p>
        </section>
      </div>
    </div>
  );
};

export default Slides;