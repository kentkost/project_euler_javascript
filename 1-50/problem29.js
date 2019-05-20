
var log = console.log,
cnt_num = 0,
chk_num = {},
a, b,
max = 100;

for (a = 2; a <= max; a++) {
	for (b = 2; b <= max; b++) {
		num = Math.log(Math.pow(a, b));
		if (typeof chk_num[num] === "undefined") {
			chk_num[num] = 0;
			cnt_num++;
		}
	}
}
//log(chk_num);
log(cnt_num);