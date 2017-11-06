import React, { Component } from 'react';
import Footer from './Footer';

class Content extends Component {
  render() {
    return (
    		<section className="main-content">
    	      <p>Text can be <strong>bold</strong>, <em>italic</em>, or <del>strikethrough</del>.</p>

    	<p><a href="another-page">Link to another page</a>.</p>

    	<p>There should be whitespace between paragraphs.</p>

    	<p>There should be whitespace between paragraphs. We recommend including a README, or a file with information about your project.</p>

    	<h1 id="header-1"><a href="#header-1"></a>Header 1</h1>

    	<p>This is a normal paragraph following a header. GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.</p>

    	<h2 id="header-2"><a href="#header-2"></a>Header 2</h2>

    	<blockquote>
    	  <p>This is a blockquote following a header.</p>

    	  <p>When something is important enough, you do it even if the odds are not in your favor.</p>
    	</blockquote>

    	<h3 id="header-3"><a href="#header-3"></a>Header 3</h3>

    	<div className="language-js highlighter-rouge"><div className="highlight"><pre className="highlight"><code><span className="c1">// Javascript code with syntax highlighting.</span>
    	<span className="kd">var</span> <span className="nx">fun</span> <span className="o">=</span> <span className="kd">function</span> <span className="nx">lang</span><span className="p">(</span><span className="nx">l</span><span className="p">)</span> <span className="p"></span>
    	  <span className="nx">dateformat</span><span className="p">.</span><span className="nx">i18n</span> <span className="o">=</span> <span className="nx">require</span><span className="p">(</span><span className="s1">'./lang/'</span> <span className="o">+</span> <span className="nx">l</span><span className="p">)</span>
    	  <span className="k">return</span> <span className="kc">true</span><span className="p">;</span>
    	<span className="p"></span>
    	</code></pre></div></div>

    	<div className="language-ruby highlighter-rouge"><div className="highlight"><pre className="highlight"><code><span className="c1"># Ruby code with syntax highlighting</span>
    	<span className="no">GitHubPages</span><span className="o">::</span><span className="no">Dependencies</span><span className="p">.</span><span className="nf">gems</span><span className="p">.</span><span className="nf">each</span> <span className="k">do</span> <span className="o">|</span><span className="n">gem</span><span className="p">,</span> <span className="n">version</span><span className="o">|</span>
    	  <span className="n">s</span><span className="p">.</span><span className="nf">add_dependency</span><span className="p">(</span><span className="n">gem</span><span className="p">,</span> <span className="s2">"= </span><span className="si">#</span><span className="n">version</span><span className="si"></span><span className="s2">"</span><span className="p">)</span>
    	<span className="k">end</span>
    	</code></pre></div></div>

    	<h4 id="header-4"><a href="#header-4"></a>Header 4</h4>

    	<ul>
    	  <li>This is an unordered list following a header.</li>
    	  <li>This is an unordered list following a header.</li>
    	  <li>This is an unordered list following a header.</li>
    	</ul>

    	<h5 id="header-5"><a href="#header-5"></a>Header 5</h5>

    	<ol>
    	  <li>This is an ordered list following a header.</li>
    	  <li>This is an ordered list following a header.</li>
    	  <li>This is an ordered list following a header.</li>
    	</ol>

    	<h6 id="header-6"><a href="#header-6"></a>Header 6</h6>

    	<table>
    	  <thead>
    	    <tr>
    	      <th>head1</th>
    	      <th>head two</th>
    	      <th>three</th>
    	    </tr>
    	  </thead>
    	  <tbody>
    	    <tr>
    	      <td>ok</td>
    	      <td>good swedish fish</td>
    	      <td>nice</td>
    	    </tr>
    	  </tbody>
    	</table>

    	<h3 id="theres-a-horizontal-rule-below-this">There’s a horizontal rule below this.</h3>

    	<hr />

    	<h3 id="here-is-an-unordered-list">Here is an unordered list:</h3>

    	<ul>
    	  <li>Item foo</li>
    	  <li>Item bar</li>
    	  <li>Item baz</li>
    	  <li>Item zip</li>
    	</ul>

    	<h3 id="and-an-ordered-list">And an ordered list:</h3>

    	<ol>
    	  <li>Item one</li>
    	  <li>Item two</li>
    	  <li>Item three</li>
    	  <li>Item four</li>
    	</ol>

    	<h3 id="and-a-nested-list">And a nested list:</h3>

    	<ul>
    	  <li>level 1 item
    	    <ul>
    	      <li>level 2 item</li>
    	      <li>level 2 item
    	        <ul>
    	          <li>level 3 item</li>
    	          <li>level 3 item</li>
    	        </ul>
    	      </li>
    	    </ul>
    	  </li>
    	  <li>level 1 item
    	    <ul>
    	      <li>level 2 item</li>
    	      <li>level 2 item</li>
    	      <li>level 2 item</li>
    	    </ul>
    	  </li>
    	  <li>level 1 item
    	    <ul>
    	      <li>level 2 item</li>
    	      <li>level 2 item</li>
    	    </ul>
    	  </li>
    	  <li>level 1 item</li>
    	</ul>

    	<h3 id="small-image">Small image</h3>

    	<p><img src="https://assets-cdn.github.com/images/icons/emoji/octocat.png" alt="" /></p>

    	<h3 id="large-image">Large image</h3>

    	<p><img src="https://guides.github.com/activities/hello-world/branching.png" alt="" /></p>

    	<h3 id="definition-lists-can-be-used-with-html-syntax">Definition lists can be used with HTML syntax.</h3>

    	<dl>
    	<dt>Name</dt>
    	<dd>Godzilla</dd>
    	<dt>Born</dt>
    	<dd>1952</dd>
    	<dt>Birthplace</dt>
    	<dd>Japan</dd>
    	<dt>Color</dt>
    	<dd>Green</dd>
    	</dl>

    	<div className="highlighter-rouge"><div className="highlight"><pre className="highlight"><code>Long, single-line code blocks should not wrap. They should horizontally scroll if they are too long. This line should be long enough to demonstrate this.
    	</code></pre></div></div>

    	<div className="highlighter-rouge"><div className="highlight"><pre className="highlight"><code>The final element.
    	</code></pre></div></div>
    	
    	<Footer/>
    	    </section>
    );
  }
}

export default Content;
