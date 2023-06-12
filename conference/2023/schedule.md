---
layout: single
title: CppIndiaCon 2023 Schedule
permalink: /conference/2023/schedule/
toc: false
widget: true
speakers: true
registerforCppIndiaCon: true
joinCppIndia: true
cppindiaconsponsors: false
---
<!-- TODO: Change the time slots without 15 min breaks. If agreed add a seperate line for break -->
<!-- <a href="/conference/2022/invites/invite2022_inbal.ics" id="session-invite" style="display:none;">
    <img src="\assets\images\SessionPost\session_invite.png" alt="Add to Calendar" title="Add this talk to Calendar">
</a> -->

This is an **online conference** that will be held on Zoom for the talks while Discord will be used for networking. 

[Register here](/conference/2023/CppIndiaCon-reg-form/) now!

<h2> Day 1 (4th August 2023)</h2>

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
      <td style="text-align: center">10:00 - 11:00
      </td>
      <td style="text-align: center"><strong>Optimization Design Patterns</strong></td>
      <td style="text-align: center"><a href="/conference/2023/speakers/mike/">Mike Shah</a></td>
      <td style="text-align: left">
      Premature optimization is the root of all evil" is a saying credited to Donald Knuth that speaks to many programmers with experience <span id="hidden-first" style="display:none">-- nut anecdotally I have observed folks overlooking the next sentence stating: "Yet we should not pass up our opportunities in that critical 3%". In this talk, the audience will be introduced to some common optimization design patterns. I will discuss precomputation, lazy versus eager evaluation, batching, caching, specialization, hinting, hashing, and using your compiler among 'optimization design patterns' that every programmer should be aware of. Examples will be demonstrated in Modern C++, and the goal is for the audience to leave feeling comfortable implementing each optimization design pattern to improve performance of their code.
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
      <td style="text-align: center">11:30 - 12:30</td>
      <td style="text-align: center"><strong>Introduction to Intel OneAPI</strong></td>
      <td style="text-align: center"><a href="/conference/2023/speakers/kiran/">Kiran Kannappan</a></td>
      <td style="text-align: left">
      Working with heterogeneous compute environments has become the requirement of the day, <span id="hidden-second" style="display:none"> the ecosystem needed like programming languages, optimization tools still remain different requiring code rewrites. oneAPI an industry initiative by Intel, makes a bold attempt to bridge this gap, providing a unified development system to enhance productivity. Intel also provides oneAPI tools, to work with various compute hardware with one point of entry. This is the language SYCL/DPC++ (Data Parallel C++)
      </span>
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
      <td style="text-align: center"><strong>C++ Features You Might Not Know</strong></td>
      <td style="text-align: center"><a href="/conference/2023/speakers/jonathan/">Jonathan Muller</a></td>
      <td style="text-align: left">
      C++ is a big language — the upcoming C++23 standard will be over 2000 pages long. This talk will cover some obscure features you might not know. <span id="hidden-third" style="display:none"> We will cover strange syntax like commutative array indexing and complicated declarators, surprising cases of undefined behavior in frequently used operators contrasted with a surprising lack of undefined behavior in operations that really shouldn't work, overlooked language facilities — some of them actually useful, and half-forgotten standard library functions — some of them for good reason.<br> 
      For each feature, we will talk about the what, the why, and how you can use it to write better (or much, *much* worse) C++ programs.  
      </span>
      <a href="#read-more-third" id="read-more-third" style="display:block">Read More</a>
      <a href="#read-less-third" id="read-less-third" style="display:none">Read Less</a>
      </td>
    </tr>
    <tr>
      <td style="text-align: center">14:00 - 15:00</td>
      <td style="text-align: center">Lunch &amp; Networking</td>
      <td style="text-align: center">&nbsp;</td>
      <td style="text-align: left">&nbsp;</td>
    </tr>
    <tr>
      <td style="text-align: center">15:00 - 16:00</td>
      <td style="text-align: center"><strong>Understanding common concurrency patterns with tricky examples</strong></td>
      <td style="text-align: center"><a href="/conference/2023/speakers/ravikiran/">Venkata Naga Ravikiran Bulusu</a></td>
      <td style="text-align: left">
      In general, concurrency is a grey topic, as it deals with multiple threads and synchronisation between them. <span id="hidden-fourth" style="display:none"> 
      In my talk, I would focus on a few tricky Inter Process Communication (IPC) scenarios/examples from old linux literature.
      Discuss ways to solve them using modern C++ techniques and tools to analyze the concurrency in depth.
      </span>
      <a href="#read-more-fourth" id="read-more-fourth" style="display:block">Read More</a>
      <a href="#read-less-fourth" id="read-less-fourth" style="display:none">Read Less</a>
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
      <td style="text-align: center"><strong>AI-assisted programming (ChatGPT, etc)</strong></td>
      <td style="text-align: center"><a href="/conference/2023/speakers/bryce/">Bryce Adelstein Lelbach </a></td>
      <td style="text-align: left">
      As a large language model, I have seen the future of software engineering, and it's AI-assisted. <span id="hidden-fifth" style="display:none"> Welcome to the world of AI-Assisted Software Engineering. In this talk, my colleague Bryce will present an overview of the latest AI tools that are revolutionizing the way software engineers write code and solve problems, with a special focus on how these tools can benefit C++ developers.<br>
      The emergence of large language models like GPT has opened up exciting new possibilities in software engineering. Tools like GitHub Copilot have shown that AI can be a game-changer for code generation, helping developers write code faster and more efficiently than ever before. Meanwhile, AI-powered root-cause analysis tools like ChatDBG, cwhy, and profilers can help developers identify and fix problems in their code more quickly and accurately than ever before.<br>
      AI-assisted software engineering will transform the way developers work, making it easier to write better code. Bryce and I are excited about the potential of these tools to evolve the way we build software, and we're thrilled to share our insights with you at this C++ conference. So come join us and let's explore the future of software engineering together!<br>
      [ Note: This abstract was co-authored by GPT-4. ]
      </span>
      <a href="#read-more-fifth" id="read-more-fifth" style="display:block">Read More</a>
      <a href="#read-less-fifth" id="read-less-fifth" style="display:none">Read Less</a>
      </td>
    </tr>
    <tr>
      <td style="text-align: center">17:30 - 17:45</td>
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
<h2> Day 2 (5th August 2023)</h2>

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
      <td style="text-align: center">10:00 - 11:00
      </td>
      <td style="text-align: center"><strong>Value-Oriented Design - by example</strong></td>
      <td style="text-align: center"><a href="/conference/2023/speakers/ankur/">Ankur Satle
      </a></td>
      <td style="text-align: left">
      Value-oriented is the best, concise, managed way to implement in C++ for most cases. <span id="hidden-sixth" style="display:none"> We will discuss in this session how we can unlearn old ways of manually doing things & costs that object-oriented approaches levy on us with simplicity, correctness, compiler-generated ways of value-oriented programming. The practical examples are intended to drive home this approach in practical scenarios.  
      </span>
      <a href="#read-more-sixth" id="read-more-sixth" style="display:block">Read More</a>
      <a href="#read-less-sixth" id="read-less-sixth" style="display:none">Read Less</a>
      </td>
    </tr>
    <tr>
      <td style="text-align: center">11:00 - 11:30</td>
      <td style="text-align: center">30 min Break &amp; Networking</td>
      <td style="text-align: center">&nbsp;</td>
      <td style="text-align: left">&nbsp;</td>
    </tr>
    <tr>
      <td style="text-align: center">11:30 - 12:30</td>
      <td style="text-align: center"><strong>C++ Coroutines from scratch</strong></td>
      <td style="text-align: center"><a href="/conference/2023/speakers/andreas/">Andreas Fertig</a></td>
      <td style="text-align: left">
      You've heard about this new feature in C++20, coroutines, but it's the first time you have encountered this term? <span id="hidden-seventh" style="display:none">  Then this talk is what you're looking for. We start from the beginning with just "normal" functions. Next, we introduce coroutines. 
      Using them, we explore the various customization points C++ offers. We look at what the new keywords co_await, co_yield, and co_return are for. 
      Sadly, we also have to talk about how to write a generator for a coroutine since there is no STL part for that in C++20. 
      Another distinction we make is between cooperative and preemptive multitasking, opening the door for another beauty of coroutines, why we don't need locks. 
      By the end of this talk, you've learned what coroutines are and where you can use them.  
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
      <td style="text-align: center">13:00 - 14:00</td>
      <td style="text-align: center"><strong>Using C++ for your Artificial Intelligence Solution</strong></td>
      <td style="text-align: center"><a href="/conference/2023/speakers/ravi/">Kushashwa Ravi Shrimali</a></td>
      <td style="text-align: left">
      It seems that AI is starting to pick up pace, but the fundamentals and challenges to get systems running for real-time purposes have remained the same. <span id="hidden-eighth" style="display:none">  While Python has surely been the go-to language to train huge AI models, the ability of C++ to efficiently implement the protocols and perform the inference hasn't declined. From deploying models, communicating the data payload with cloud services, to efficiently merging with other pipelines in a product, C++ can do an amazing job. It's a fact, that the journey from having trained a model to detect accidents from a traffic feed to deploying the model in real-time in a traffic light system, is not so smooth. These times demand immediate results with decent accuracy, and hence performance is also a fair factor to judge a system's success. Using C++ for AI systems can help optimize the memory usage and performance. Consider a scenario of a traffic light detection based braking system. For a car driving at 30-40 km/h, a couple of additional seconds in model inference can pass or fail your entire ADAS function from the customer's perspective, irrespective of how good your model is. Storing and performing inference on the real time data is also a challenge, and how and when to leverage the available resources in a system is a good knowledge to have. This talk aims to give the audience a detailed overview on how to use C++ for their Artificial Intelligence systems or pipelines. Just being generally aware about the possible alternatives, goes a long way, and this talk will just do that. 
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
      <td style="text-align: center">15:00 - 16:00</td>
      <td style="text-align: center"><strong>Why 5G is Fast? and C++ in 5G Open Source</strong></td>
      <td style="text-align: center"><a href="/conference/2023/speakers/selvakumar/">Selvakumar Jawahar</a></td>
      <td style="text-align: left">
      In this talk, we will discuss the 5G Core architecture. <span id="hidden-ninth" style="display:none"> 
       Also, we will introduce several open-source C++-based frameworks which implement 5G components. By the end of this talk, attendees will be able to understand how 5G Core architecture works, and it should motivate them to experiment with 5G libraries written in C++.  
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
      <td style="text-align: center"><strong>TBD</strong></td>
      <td style="text-align: center"><a href=" ">TBD </a></td>
      <td style="text-align: left">
      TBD <span id="hidden-tenth" style="display:none"> 
      </span>
      <a href="#read-more-tenth" id="read-more-tenth" style="display:block">Read More</a>
      <a href="#read-less-tenth" id="read-less-tenth" style="display:none">Read Less</a>
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

[Register now](/conference/2023/CppIndiaCon-reg-form/) for a day of learning, exchange and networking!

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

  document.getElementById('read-more-fifth').addEventListener('click', function() {
    read_more('hidden-fifth', 'read-more-fifth', 'read-less-fifth')
  });
  document.getElementById('read-less-fifth').addEventListener('click', function() {
    read_less('hidden-fifth', 'read-more-fifth', 'read-less-fifth')
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

  document.getElementById('read-more-tenth').addEventListener('click', function() {
    read_more('hidden-tenth', 'read-more-tenth', 'read-less-tenth')
  });
  document.getElementById('read-less-tenth').addEventListener('click', function() {
    read_less('hidden-tenth', 'read-more-tenth', 'read-less-tenth')
  });
});
</script>
