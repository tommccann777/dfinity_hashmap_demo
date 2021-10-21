import { hello } from "../../declarations/hello";

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  // Interact with hello actor, calling the greet method
  const greeting = await hello.greet(name);

  document.getElementById("greeting").innerText = greeting;
});


function char_to_symbol(c) {
  if (typeof c == 'string') c = c.charCodeAt(0);

  if (c >= 'a'.charCodeAt(0) && c <= 'z'.charCodeAt(0)) {
    return c - 'a'.charCodeAt(0) + 6;
  }

  if (c >= '1'.charCodeAt(0) && c <= '5'.charCodeAt(0)) {
    return c - '1'.charCodeAt(0) + 1;
  }

  return 0;
};

/**
 * convert string to create ID in EOS smart contract
 * @param {String} s
 * @return string to uint64 is not fit to js number, the return value is string format
 */
function nameToUint64(s) {
  let n = 0n;

  let i = 0;
  for (; i < 12 && s[i]; i++) {
    n |= BigInt(char_to_symbol(s.charCodeAt(i)) & 0x1f) << BigInt(64 - 5 * (i + 1));
  }

  if (i == 12) {
    n |= BigInt(char_to_symbol(s.charCodeAt(i)) & 0x0f);
  }

  return n; //.toString();;
};

document.getElementById("storeIdBtn1").addEventListener("click", async () => {
  // Interact with hello actor, calling the greet method
  // const greeting = await hello.greet(name);

  // dummy variables - for testing
  let proton_account1 = "arnoldlayne";
  // let name_value = nameToUint64(proton_account);
  let principal_id1 = "jni4i-spimh-lkiau-m2ke6-pg7db-qi3ql-cop5r-nc4sh-z7p5e-gu5md-lqe";

  let proton_account2 = "jeromekelsey";
  // let name_value = nameToUint64(proton_account);
  let principal_id2 = "wmenp-d7u2t-7dr7l-heprf-kyayp-hatj5-ktogv-5iip6-4opsv-ivh3q-xqe";

  const reply1 = await hello.storeid(proton_account1, principal_id1);
  const reply2 = await hello.storeid(proton_account2, principal_id2);

  alert(reply1);
  alert(reply2);

  // alert("name_value = " + name_value + ", proton_account = " + proton_account + ", principal_id = " + principal_id);
});

document.getElementById("storeIdBtn2").addEventListener("click", async () => {
  // Interact with hello actor, calling the greet method
  // const greeting = await hello.greet(name);

  // dummy variables - for testing
  let proton_account3 = "celiacollins";
  // let name_value = nameToUint64(proton_account);
  let principal_id3 = "cccccc-spimh-lkiau-m2ke6-pg7db-qi3ql-cop5r-nc4sh-z7p5e-gu5md-lqe";

  const reply3 = await hello.storeid(proton_account3, principal_id3);
  
  alert(reply3);

  // alert("name_value = " + name_value + ", proton_account = " + proton_account + ", principal_id = " + principal_id);
});