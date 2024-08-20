---
layout: single
title: CppIndiaCon 2024 Schedule
permalink: /conference/2024/schedule/
toc: false
widget: false
speakers: true
registerforCppIndiaCon: true
joinCppIndia: false
cppindiaconsponsors: true
---
<!-- TODO: Change the time slots without 15 min breaks. If agreed add a seperate line for break -->
<!-- <a href="/conference/2022/invites/invite2022_inbal.ics" id="session-invite" style="display:none;">
    <img src="\assets\images\SessionPost\session_invite.png" alt="Add to Calendar" title="Add this talk to Calendar">
</a> -->

This is an **online conference** that will be held on Zoom for the talks while Discord will be used for networking.

[Get your tickets now!](https://konfhub.com/cppindiacon2024){:target="_blank"}

<h2> Day 1 (23th August 2024)</h2>

<table>
  <thead>
    <tr>
      <th style="text-align: center">Time(IST)</th>
      <th style="text-align: center">Topic</th>
      <th style="text-align: center">Presenter</th>
      <th style="text-align: left">Abstract</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: center">09:45 - 10:00<br></td>
      <td style="text-align: center"><strong>Introduction</strong></td>
      <td style="text-align: center">CppIndia Hosts</td>
      <td style="text-align: left">Welcome, familiarisation with the conference setup and Networking tools.</td>
    </tr>
    <tr>
      <td style="text-align: center">10:00 - 11:00</td>
      <td style="text-align: center"><strong>Software Design and Performance in C++</strong></td>
      <td style="text-align: center"><a href="/conference/2024/speakers/john/">John Stratton</a></td>
      <td style="text-align: left">
      Historically, software developers were taught to focus on important software design principles that make it possible to construct the large software systems we rely on without falling into a pit of brittle, buggy, and unmaintainable code.<span id="hidden-first" style="display:none">--  In pursuit of these goals, and in the context of exponentially increasing compute capacity, performance was at most a secondary concern for most software projects. <br>
      Today, performance has become more and more the responsibility of the programmer in addition to the system provider. Some would say that this means compromising the good software design principles we normally rely on, but that should not be necessary. C++ itself is a language designed to make it possible to write both highly efficient and well-organized software, if the developer has an understanding of what the compiler and system will do with various language features and software implementation patterns. This presentation will cover high-level principles of both software design and software performance in C++, and explore case studies demonstrating how modern C++ language features can be used to combine and achieve both.
      </span>
      <a href="#read-more-first" id="read-more-first" style="display:block">Read More</a>
      <a href="#read-less-first" id="read-less-first" style="display:none">Read Less</a>
      </td>
    </tr>
    <tr>
      <td style="text-align: center">11:00 - 11:30</td>
      <td style="text-align: center">30 min Break &amp; Networking</td>
      <td style="text-align: center">&nbsp;</td>
      <td style="text-align: left">&nbsp;</td>
    </tr>
    <tr>
      <td style="text-align: center">11:30 - 12:30 </td>
      <td style="text-align: center"><strong>[Keynote] Declarative C++</strong></td>
      <td style="text-align: center"><a href="/conference/2024/speakers/ankur/">Ankur Satle</a></td>
      <td style="text-align: left">
      I don’t write code; I just express my intent and the compiler writes the code for me",<span id="hidden-second" style="display:none">I exclaimed while delivering a talk at a Company's Annual Event. And, I was very much talking about C++ code and not about a cloud deployment yaml or a makefile. We, as humans, know the best about the objective to be achieved or the problem to be solved. The compiler knows the best about the hardware and the best ways to achieve a desired outcome. It looks like a win-win approach that we specify the high-level outcome and the compiler (not an LLM! 😜) generates the best code to realise it. But, is it really possible to do this in C++? <br>
      In this talk, we explore how close to this we can get! I hope to inspire you to take the leap towards easy-to-use-correctly, highly maintainable and potentially bug-free implementations. BE WARNED: Once you see Declarative C++, THERE IS NO TURNING BACK! Your code will not be the same!!!</span>
      <a href="#read-more-second" id="read-more-second" style="display:block">Read More</a>
      <a href="#read-less-second" id="read-less-second" style="display:none">Read Less</a>
      </td>
    </tr>
    <tr>
      <td style="text-align: center">12:30 - 13:00</td>
      <td style="text-align: center">30 min Break &amp; Networking</td>
      <td style="text-align: center">&nbsp;</td>
      <td style="text-align: left">&nbsp;</td>
    </tr>
    <tr>
      <td style="text-align: center">13:00 - 14:00</td>
      <td style="text-align: center"><strong>Art of Debugging</strong></td>
      <td style="text-align: center"><a href="/conference/2024/speakers/pavithra/">Pavithra Ashok Kumar</a></td>
      <td style="text-align: left">
      Enhance your debugging expertise by attending the focused talk,
      designed for developers seeking to refine their problem-solving skills in software development.<span id="hidden-third" style="display:none">
      This presentation will guide you through effective strategies for diagnosing and resolving bugs, with a particular emphasis on navigating the complexities of legacy code. <br>
      You will gain insights into a systematic approach for identifying bugs,
      employing advanced techniques and tools for resolution, and implementing preventive measures to mitigate future errors.<br>Join me to elevate your debugging capabilities and foster a more efficient and reliable development process. The talk also outlines preventive measures to ease the debugging process for the future  
      </span>
      <a href="#read-more-third" id="read-more-third" style="display:block">Read More</a>
      <a href="#read-less-third" id="read-less-third" style="display:none">Read Less</a>
      </td>
    </tr>
    <tr>
      <td style="text-align: center">14:00 - 15:00 </td>
      <td style="text-align: center">Lunch &amp; Networking</td>
      <td style="text-align: center">&nbsp;</td>
      <td style="text-align: left">&nbsp;</td>
    </tr>
    <tr>
      <td style="text-align: center">15:00 - 16:00</td>
      <td style="text-align: center"><strong>What is a range?</strong></td>
      <td style="text-align: center"><a href="/conference/2024/speakers/simon/">Šimon Tóth</a></td>
      <td style="text-align: left">
      A range of elements was a very simple concept. Until C++20.<span id="hidden-fourth" style="display:none">
      C++20 codified the concept of a range, a view, a common range, a borrowed range, a sized range.
      After attending this talk, you will have a good understanding of the different types of ranges introduced in C++20, their limitations and implications on performance.
      </span>
      <a href="#read-more-fourth" id="read-more-fourth" style="display:block">Read More</a>
      <a href="#read-less-fourth" id="read-less-fourth" style="display:none">Read Less</a>
      </td>
    </tr>
    <tr>
      <td style="text-align: center">16:00 - 16:30 </td>
      <td style="text-align: center">30 min Break &amp; Networking</td>
      <td style="text-align: center">&nbsp;</td>
      <td style="text-align: left">&nbsp;</td>
    </tr>
    <tr>
      <td style="text-align: center">16:30 - 17:30</td>
      <td style="text-align: center"><strong>Lightning Talk</strong></td>
      <td style="text-align: center"> Multiple Speakers</td>
      <td style="text-align: left">
      </td>
    </tr>
    <tr>
      <td style="text-align: center">17:30 - 17:45 </td>
      <td style="text-align: center"><strong>Day 1 closure</strong></td>
      <td style="text-align: center">&nbsp;</td>
      <td style="text-align: left">&nbsp;</td>
    </tr>
    <tr>
      <td style="text-align: center">All day</td>
      <td style="text-align: center"><strong>Networking on Discord</strong></td>
      <td style="text-align: center">&nbsp;</td>
      <td style="text-align: left">&nbsp;</td>
    </tr>
  </tbody>
</table>

<!-- ============================================ -->
<h2> Day 2 (24th August 2024)</h2>

<table>
  <thead>
    <tr>
      <th style="text-align: center">Time(IST)</th>
      <th style="text-align: center">Topic</th>
      <th style="text-align: center">Presenter</th>
      <th style="text-align: left">Abstract</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: center">09:45 - 10:00<br></td>
      <td style="text-align: center"><strong>Introduction</strong></td>
      <td style="text-align: center">CppIndia Hosts</td>
      <td style="text-align: left">Welcome, familiarisation with the conference setup and Networking tools.</td>
    </tr>
    <tr>
      <td style="text-align: center">10:00 - 11:00</td>
      <td style="text-align: center"><strong>Getting Started with Modern C++ - A Tour of Features</strong></td>
      <td style="text-align: center"><a href="/conference/2024/speakers/mike/">Mike Shah
      </a></td>
      <td style="text-align: left">
      Modern C++ is a powerful and expressive language used by millions of programmers. <span id="hidden-sixth" style="display:none">  
      The large C++ ecosystem of libraries and tooling allows C++ developers to build scalable and fast systems on multiple platforms utilizing techniques from multiple programming paradigms to conquer many domains in the software industry. That's the elevator pitch at the least -- so how does one get started in Modern C++ and utilize all these features of the language?
      In this talk, I take audience members on a step-by-step journey to understand the fundamental pieces of the C++ ecosystem focusing primarily on new features of the Modern C++ language. In this talk we will focus on new language features and the STL and pointing out key parts (array, span, smart_pointers, ranges, concepts, and thread) and how these features improve upon legacy C++ code. Audience members will leave this talk excited about using a modern version of the language, and what features and libraries can enhance their experience with C++ going forward.
      </span>
      <a href="#read-more-sixth" id="read-more-sixth" style="display:block">Read More</a>
      <a href="#read-less-sixth" id="read-less-sixth" style="display:none">Read Less</a>
      </td>
    </tr>
    <tr>
      <td style="text-align: center">11:00 - 11:30 </td>
      <td style="text-align: center">30 min Break &amp; Networking</td>
      <td style="text-align: center">&nbsp;</td>
      <td style="text-align: left">&nbsp;</td>
    </tr>
    <tr>
      <td style="text-align: center">11:30 - 12:30</td>
      <td style="text-align: center"><strong>Exploring Undefined Behaviour in C++</strong></td>
      <td style="text-align: center"><a href="/conference/2024/speakers/mahendra/">Mahendra Bhagwan Garodi</a></td>
      <td style="text-align: left">
      Undefined behavior in C++ can make programs act in unexpected ways. <span id="hidden-seventh" style="display:none">   In this talk, we'll explain what defined, undefined, implementation-defined, and unspecified behavior mean, with clear examples for each. We'll look at common situations that cause undefined behaviour and see how compilers use this to make programs run faster. We'll also talk about why the C++ standard allows undefined behavior and how this affects performance and complexity. Finally, we'll introduce tools that can help find and fix undefined behaviour, helping you write safer and more reliable code.  
      </span>
      <a href="#read-more-seventh" id="read-more-seventh" style="display:block">Read More</a>
      <a href="#read-less-seventh" id="read-less-seventh" style="display:none">Read Less</a>
      </td>
    </tr>
    <tr>
      <td style="text-align: center">12:30 - 13:00</td>
      <td style="text-align: center">30 min Break &amp; Networking</td>
      <td style="text-align: center">&nbsp;</td>
      <td style="text-align: left">&nbsp;</td>
    </tr>
    <tr>
      <td style="text-align: center">13:00 - 14:00 </td>
      <td style="text-align: center"><strong>An (In-)Complete Guide to C++ Object Lifetimes</strong></td>
      <td style="text-align: center"><a href="/conference/2024/speakers/jonathan/">Jonathan Müller</a></td>
      <td style="text-align: left">
      A C++ program manipulate objects, but it is undefined behavior if you attempt to manipulate them while they are not alive. <span id="hidden-eighth" style="display:none">So let's do a deep dive into object lifetime. When are objects created and when are they destroyed? How does temporary lifetime extension come into play and what changed there recently? What happens when you `std::malloc` memory and just pretend objects are there without creating anything? Or worse: You use `mmap()` to read shared memory. How do unions interact with constructors, strict aliasing, or the "common initial sequence"? What when you explicitly call the destructor and later re-use the same storage? What's the deal with `std::launder`, `std::bit_cast`, and `std::start_lifetime_as`? We'll answer all of those questions and much more. We'll do that by looking at the C++ standard, old and new proposals, and compiler optimizations.
      </span>
      <a href="#read-more-eighth" id="read-more-eighth" style="display:block">Read More</a>
      <a href="#read-less-eighth" id="read-less-eighth" style="display:none">Read Less</a>
      </td>
    </tr>
    <tr>
      <td style="text-align: center">14:00 - 15:00</td>
      <td style="text-align: center">Lunch &amp; Networking</td>
      <td style="text-align: center">&nbsp;</td>
      <td style="text-align: left">&nbsp;</td>
    </tr>
    <tr>
      <td style="text-align: center">15:00 - 16:00 </td>
      <td style="text-align: center"><strong>[Keynote]<br> C++ ♥ Python</strong></td>
      <td style="text-align: center"><a href="/conference/2024/speakers/alex/">Alex Dathskovsky</a></td>
      <td style="text-align: left">
      In the ever-evolving landscape of software development, the choice between a monolithic repository (mono-repo) and a multi-repository (multi-repo) approach has become a crucial decision for project teams. <span id="hidden-ninth" style="display:none">
        Join us in this insightful talk as we delve into the nuances of these two approaches, weighing their respective pros and cons. We will then embark on a journey through the implementation of a multi-repo strategy at speedata.io, exploring the challenges faced, the tools chosen, and the lessons learned.
      </span>
      <a href="#read-more-ninth" id="read-more-ninth" style="display:block">Read More</a>
      <a href="#read-less-ninth" id="read-less-ninth" style="display:none">Read Less</a>
      </td>
    </tr>
    <tr>
      <td style="text-align: center">16:00 - 16:30</td>
      <td style="text-align: center">30 min Break &amp; Networking</td>
      <td style="text-align: center">&nbsp;</td>
      <td style="text-align: left">&nbsp;</td>
    </tr>
    <tr>
      <td style="text-align: center">16:30 - 17:30</td>
      <td style="text-align: center"><strong>Quiz Competition</strong></td>
      <td style="text-align: center"><a href=" ">Quiz Competition </a></td>
      <td style="text-align: left">
      Quiz Competition
      </td>
    </tr>
    <tr>
      <td style="text-align: center">17:30 - 17:45</td>
      <td style="text-align: center"><strong>Conference Closing</strong></td>
      <td style="text-align: center">&nbsp;</td>
      <td style="text-align: left">&nbsp;</td>
    </tr>
    <tr>
      <td style="text-align: center">All day</td>
      <td style="text-align: center"><strong>Networking on Discord</strong></td>
      <td style="text-align: center">&nbsp;</td>
      <td style="text-align: left">&nbsp;</td>
    </tr>
  </tbody>
</table>
---

[Grab your tickets](https://konfhub.com/cppindiacon2024){:target="_blank"} for a day of learning, exchange and networking!

[Join CppIndia Discord server](https://discord.gg/Wz42tX5){:target="_blank"} to get latest information, connect with like minded people, exchange the knowledege and get familier with the platform.
<!-- Networking Tables will remain open on CppIndia **Discord server** for networking whole day. Please [join CppIndia discord channel](https://discord.gg/Wz42tX5){:target="_blank"}. -->

<script>
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('read-more-first').addEventListener('click', function() {
    read_more('hidden-first', 'read-more-first', 'read-less-first')
  });
  document.getElementById('read-less-first').addEventListener('click', function() {
    read_less('hidden-first', 'read-more-first', 'read-less-first')
  });

  document.getElementById('read-more-second').addEventListener('click', function() {
    read_more('hidden-second', 'read-more-second', 'read-less-second')
  });
  document.getElementById('read-less-second').addEventListener('click', function() {
    read_less('hidden-second', 'read-more-second', 'read-less-second')
  });

  document.getElementById('read-more-third').addEventListener('click', function() {
    read_more('hidden-third', 'read-more-third', 'read-less-third')
  });
  document.getElementById('read-less-third').addEventListener('click', function() {
    read_less('hidden-third', 'read-more-third', 'read-less-third')
  });

  document.getElementById('read-more-fourth').addEventListener('click', function() {
    read_more('hidden-fourth', 'read-more-fourth', 'read-less-fourth')
  });
  document.getElementById('read-less-fourth').addEventListener('click', function() {
    read_less('hidden-fourth', 'read-more-fourth', 'read-less-fourth')
  });

// ==========================
  document.getElementById('read-more-sixth').addEventListener('click', function() {
    read_more('hidden-sixth', 'read-more-sixth', 'read-less-sixth')
  });
  document.getElementById('read-less-sixth').addEventListener('click', function() {
    read_less('hidden-sixth', 'read-more-sixth', 'read-less-sixth')
  });

  document.getElementById('read-more-seventh').addEventListener('click', function() {
    read_more('hidden-seventh', 'read-more-seventh', 'read-less-seventh')
  });
  document.getElementById('read-less-seventh').addEventListener('click', function() {
    read_less('hidden-seventh', 'read-more-seventh', 'read-less-seventh')
  });

  document.getElementById('read-more-eighth').addEventListener('click', function() {
    read_more('hidden-eighth', 'read-more-eighth', 'read-less-eighth')
  });
  document.getElementById('read-less-eighth').addEventListener('click', function() {
    read_less('hidden-eighth', 'read-more-eighth', 'read-less-eighth')
  });

  document.getElementById('read-more-ninth').addEventListener('click', function() {
    read_more('hidden-ninth', 'read-more-ninth', 'read-less-ninth')
  });
  document.getElementById('read-less-fourth').addEventListener('click', function() {
    read_less('hidden-ninth', 'read-more-ninth', 'read-less-ninth')
  });
});
</script>
