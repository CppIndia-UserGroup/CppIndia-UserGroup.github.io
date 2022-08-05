---
layout: single
title: CppIndiaCon Schedule
permalink: /conference/2022/schedule/
toc: false
widget: true
speakers: true
registerforCppIndiaCon: true
joinCppIndia: false
cppindiaconsponsors: true
---
<!-- TODO: Change the time slots without 15 min breaks. If agreed add a seperate line for break -->

This is an **online conference** that will be held on Zoom for the talks while Discord will be used for networking. 

Register [here](/conference/2022/CppIndiaCon-reg-form/) now!

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
      <td style="text-align: center">09:30 - 09:45</td>
      <td style="text-align: center"><strong>Introduction</strong></td>
      <td style="text-align: center">CppIndia Hosts</td>
      <td style="text-align: left">Welcome, familiarisation with the conference setup and Networking tools.</td>
    </tr>
    <tr>
      <td style="text-align: center">09:45 - 10:45</td>
      <td style="text-align: center"><strong>Customization Methods: Connecting User And Library Code</strong></td>
      <td style="text-align: center"><a href="/conference/2022/speakers/inbal/">Inbal Levi</a></td>
      <td style="text-align: left">
      The interface between a library and its users is a major design <span id="hidden-first" style="display:none">consideration for every developer, and has been evolving greatly over C++’s lifetime. In this talk we will go over different methods for connecting generic library code with user-side specific code, commonly known as Customization Points. We will cover the benefits and downsides of different methods (including CTS, ADL, Concepts, CTOs, and the latest to be considered - tag_invoke), and present future directions for these mechanisms. At the end of the talk, you’ll be familiar with the terminology and developments in this field, including the ones planned for C++23 and C++26.
      </span>
      <a href="#read-more-first" id="read-more-first" style="display:block">Read More</a>
      <a href="#read-less-first" id="read-less-first" style="display:none">Read Less</a>
      </td>
    </tr>
    <tr>
      <td style="text-align: center">10:45 - 11:15</td>
      <td style="text-align: center">30 min Break &amp; Networking</td>
      <td style="text-align: center">&nbsp;</td>
      <td style="text-align: left">&nbsp;</td>
    </tr>
    <tr>
      <td style="text-align: center">11:15 - 12:15</td>
      <td style="text-align: center"><strong>Default Generated Comparison for Your Data Types</strong></td>
      <td style="text-align: center"><a href="/conference/2022/speakers/mahendra/">Mahendra Garodi</a></td>
      <td style="text-align: left">
      Prior to C++20, creating a user-defined data type that supports all comparison <span id="hidden-second" style="display:none">operators involved a lot of boilerplate code. For all six comparison operators to be supported, they must be implemented individually. The C++20 standard introduced two features to simplify comparisons of user defined data types. The first is the space ship operator, which enables three-way comparisons. Using a three-way comparison implementation, the compiler rewrites the other comparison operator. The second feature is default comparison. The compiler provides a default implementation of the space-ship operator if the opt-in feature is selected. Our goal in this talk is to study the space-ship operator and how the default implementation for the space-ship operator is generated. We will also look at how space-ship operators are used to rewrite other comparison expressions.
      </span>
      <a href="#read-more-second" id="read-more-second" style="display:block">Read More</a>
      <a href="#read-less-second" id="read-less-second" style="display:none">Read Less</a>
      </td>
    </tr>
    <tr>
      <td style="text-align: center">12:15 - 13:15</td>
      <td style="text-align: center">Lunch &amp; Networking</td>
      <td style="text-align: center">&nbsp;</td>
      <td style="text-align: left">&nbsp;</td>
    </tr>
    <tr>
      <td style="text-align: center">13:15 - 14:15</td>
      <td style="text-align: center"><strong>Concurrency with Reactor Pattern</strong></td>
      <td style="text-align: center"><a href="/conference/2022/speakers/selvakumar/">Selvakumar Jawahar</a></td>
      <td style="text-align: left">
      We designed a high-performance reactor framework <span id="hidden-third" style="display:none">to collect network metrics from different network nodes. This talk is about the high-level design of this single-threaded framework, which helps us gather 100’s thousands of data points per second.
      </span>
      <a href="#read-more-third" id="read-more-third" style="display:block">Read More</a>
      <a href="#read-less-third" id="read-less-third" style="display:none">Read Less</a>
      </td>
    </tr>
    <tr>
      <td style="text-align: center">14:15 - 14:45</td>
      <td style="text-align: center">30 min break</td>
      <td style="text-align: center">&nbsp;</td>
      <td style="text-align: left">&nbsp;</td>
    </tr>
    <tr>
      <td style="text-align: center">14:45 - 15:45</td>
      <td style="text-align: center"><strong>Getting the most out of GDB</strong></td>
      <td style="text-align: center"><a href="/conference/2022/speakers/greg/">Greg Law</a></td>
      <td style="text-align: left">
      If you write C++ on Linux then chances are that you use GDB at least sometimes. <span id="hidden-fourth" style="display:none">Many don’t realise how much GDB can you do for you. It’s a lot more than just break, step, print. This talk is packed with short and simple examples demonstrating the more advanced features of GDB, including its powerful Python scripting, different user interfaces, dynamic printf, multi-process debugging, advanced types of breakpoints and watchpoints, even time-travel debugging!
      Developers spend relatively little time typing in the code and much more getting it to work - you can’t be a great programmer without being great at debugging. And you can’t be great at debugging if you’re not able to get the most out of the tools available.
      Few slides, lots of demos, lots of things covered - you will leave the talk able to debug difficult problems much more quickly than you could before.
      </span>
      <a href="#read-more-fourth" id="read-more-fourth" style="display:block">Read More</a>
      <a href="#read-less-fourth" id="read-less-fourth" style="display:none">Read Less</a>
      </td>
    </tr>
    <tr>
      <td style="text-align: center">15:45 - 16:15</td>
      <td style="text-align: center">30 min Break</td>
      <td style="text-align: center">&nbsp;</td>
      <td style="text-align: left">&nbsp;</td>
    </tr>
    <tr>
      <td style="text-align: center">16:15 - 17:15</td>
      <td style="text-align: center"><strong>How C++ eliminated Memory Issues</strong></td>
      <td style="text-align: center"><a href="/conference/2022/speakers/ankur/">Ankur Satle</a></td>
      <td style="text-align: left">
      Memory safety issues had been a big pain point with C++. But not anymore! <span id="hidden-fifth" style="display:none">Today, memory issues are a major concern for only about 14% of developers. We go through how C++ makes memory safety a non-issue. We discuss how to foolproof implementations against memory issues like memory leaks, dangling pointers, double delete/free, bounds safety, etc. Let’s stop worrying about memory safety and focus on delivering value, shall we?
      </span>
      <a href="#read-more-fifth" id="read-more-fifth" style="display:block">Read More</a>
      <a href="#read-less-fifth" id="read-less-fifth" style="display:none">Read Less</a>
      </td>
    </tr>
    <tr>
      <td style="text-align: center">17:15 - 17:30</td>
      <td style="text-align: center"><strong>Closing</strong></td>
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

[Register now](/conference/2022/CppIndiaCon-reg-form/) for a day of learning, exchange and networking!

Networking Tables will remain open on CppIndia **Discord server** for networking whole day. Please [join CppIndia discord channel](https://discord.gg/Wz42tX5){:target="_blank"}.

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
});
</script>