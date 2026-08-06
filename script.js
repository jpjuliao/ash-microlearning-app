(function () {
  "use strict";

  const EMBEDDED_ACTIVITIES = [
  {
    "name": "Trivia Tuesdays March 4, 2025",
    "date": "March 4, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#url?id=19",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays March 11, 2025",
    "date": "March 11, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#url?id=20",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays March 18, 2025",
    "date": "March 18, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81243",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays March 25, 2025",
    "date": "March 25, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81244",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays April 1, 2025",
    "date": "April 1, 2025",
    "link": "url?id=242https://academy.hematology.org/mod/h5pactivity/view.php?id=81245",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays April 8, 2025",
    "date": "April 8, 2025",
    "link": "https://academy.hematology.org/mod/h5pactivity/view.php?id=812462https://academy.hematology.org/mod/h5pactivity/view.php?id=81246",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays April 15, 2025",
    "date": "April 15, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81247",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays April 22, 2025",
    "date": "April 22, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#url?id=26",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays April 29, 2025",
    "date": "April 29, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#url?id=27",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays May 6, 2025",
    "date": "May 6, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/my/8",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays May 13, 2025",
    "date": "May 13, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81251",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays May 20, 2025",
    "date": "May 20, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81252",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays May 27, 2025",
    "date": "May 27, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81253",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays June 3, 2025",
    "date": "June 3, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81254",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays June 10, 2025",
    "date": "June 10, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81255",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays June 17, 2025",
    "date": "June 17, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81257",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays June 24, 2025",
    "date": "June 24, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81258",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays July 1, 2025",
    "date": "July 1, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81260",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays July 8, 2025",
    "date": "July 8, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81261",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays July 15, 2025",
    "date": "July 15, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81262",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays July 22, 2025",
    "date": "July 22, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81263",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays July 29, 2025",
    "date": "July 29, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81264",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays August 5, 2025",
    "date": "August 5, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81291",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays August 12, 2025",
    "date": "August 12, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81265",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays August 19, 2025",
    "date": "August 19, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81266",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays August 26, 2025",
    "date": "August 26, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81267",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays September 2, 2025",
    "date": "September 2, 2025",
    "link": "url?id=242https://academy.hematology.org/mod/h5pactivity/view.php?id=81268",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays September 9, 2025",
    "date": "September 9, 2025",
    "link": "https://academy.hematology.org/mod/h5pactivity/view.php?id=812462https://academy.hematology.org/mod/h5pactivity/view.php?id=81269",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays September 16, 2025",
    "date": "September 16, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81292",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays September 23, 2025",
    "date": "September 23, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#url?id=48",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays September 30, 2025",
    "date": "September 30, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#url?id=49",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays October 7, 2025",
    "date": "October 7, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/course/index.php0",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays October 14, 2025",
    "date": "October 14, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81272",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays October 21, 2025",
    "date": "October 21, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81273",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays October 28, 2025",
    "date": "October 28, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81274",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays November 4, 2025",
    "date": "November 4, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81294",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays November 11, 2025",
    "date": "November 11, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81295",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays November 18, 2025",
    "date": "November 18, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81275",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays November 25, 2025",
    "date": "November 25, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81296",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays December 2, 2025",
    "date": "December 2, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81276",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays December 9, 2025",
    "date": "December 9, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81297",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays December 16, 2025",
    "date": "December 16, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81298",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays December 23, 2025",
    "date": "December 23, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81277",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays December 30, 2025",
    "date": "December 30, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81278",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays January 6, 2026",
    "date": "January 6, 2026",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81279",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays January 13, 2026",
    "date": "January 13, 2026",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81280",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays January 20, 2026",
    "date": "January 20, 2026",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81281",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays January 27, 2026",
    "date": "January 27, 2026",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81282",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays February 3, 2026",
    "date": "February 3, 2026",
    "link": "url?id=242https://academy.hematology.org/mod/h5pactivity/view.php?id=81283",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays February 10, 2026",
    "date": "February 10, 2026",
    "link": "url?id=242https://academy.hematology.org/mod/h5pactivity/view.php?id=81299",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays February 17, 2026",
    "date": "February 17, 2026",
    "link": "https://academy.hematology.org/my/42https://academy.hematology.org/mod/h5pactivity/view.php?id=81300",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays February 24, 2026",
    "date": "February 24, 2026",
    "link": "https://academy.hematology.org/mod/h5pactivity/view.php?id=812462https://academy.hematology.org/mod/h5pactivity/view.php?id=81284",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays March 3, 2026",
    "date": "March 3, 2026",
    "link": "https://academy.hematology.org/course/view.php?id=1763#url?id=71",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays March 10, 2026",
    "date": "March 10, 2026",
    "link": "https://academy.hematology.org/course/view.php?id=1763#url?id=72",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays March 17, 2026",
    "date": "March 17, 2026",
    "link": "https://academy.hematology.org/course/view.php?id=1763#url?id=73",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays March 24, 2026",
    "date": "March 24, 2026",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/local/raisecomplain/raise_complain_list.php4",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays March 31, 2026",
    "date": "March 31, 2026",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81288",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays April 7, 2026",
    "date": "April 7, 2026",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81302",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays April 14, 2026",
    "date": "April 14, 2026",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81289",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays April 21, 2026",
    "date": "April 21, 2026",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81290",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays April 28, 2026",
    "date": "April 28, 2026",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81497",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays May 5, 2026",
    "date": "May 5, 2026",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81498",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays May 12, 2026",
    "date": "May 12, 2026",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81499",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays May 19, 2026",
    "date": "May 19, 2026",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81500",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays May 26, 2026",
    "date": "May 26, 2026",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81501",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays June 2, 2026",
    "date": "June 2, 2026",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81502",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays June 9, 2026",
    "date": "June 9, 2026",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81503",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays June 16, 2026",
    "date": "June 16, 2026",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81504",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays June 23, 2026",
    "date": "June 23, 2026",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81507",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays June 30, 2026",
    "date": "June 30, 2026",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81508",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays July 7, 2026",
    "date": "July 7, 2026",
    "link": "url?id=242https://academy.hematology.org/mod/h5pactivity/view.php?id=81509",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays July 14, 2026",
    "date": "July 14, 2026",
    "link": "url?id=242https://academy.hematology.org/mod/h5pactivity/view.php?id=81510",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays July 21, 2026",
    "date": "July 21, 2026",
    "link": "url?id=242https://academy.hematology.org/mod/h5pactivity/view.php?id=81511",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Trivia Tuesdays July 28, 2026",
    "date": "July 28, 2026",
    "link": "url?id=242https://academy.hematology.org/mod/h5pactivity/view.php?id=81512",
    "group": "Trivia Tuesdays"
  },
  {
    "name": "Women Wednesdays March 5, 2025",
    "date": "March 5, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81304",
    "group": "Women Wednesdays"
  },
  {
    "name": "Women Wednesdays March 12, 2025",
    "date": "March 12, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#url?id=96",
    "group": "Women Wednesdays"
  },
  {
    "name": "Women Wednesdays March 19, 2025",
    "date": "March 19, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#url?id=97",
    "group": "Women Wednesdays"
  },
  {
    "name": "Women Wednesdays March 26, 2025",
    "date": "March 26, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#url?id=98",
    "group": "Women Wednesdays"
  },
  {
    "name": "Women Wednesdays April 2, 2025",
    "date": "April 2, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81308",
    "group": "Women Wednesdays"
  },
  {
    "name": "Women Wednesdays April 9, 2025",
    "date": "April 9, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81309",
    "group": "Women Wednesdays"
  },
  {
    "name": "Women Wednesdays April 16, 2025",
    "date": "April 16, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81310",
    "group": "Women Wednesdays"
  },
  {
    "name": "Women Wednesdays April 23, 2025",
    "date": "April 23, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81311",
    "group": "Women Wednesdays"
  },
  {
    "name": "Women Wednesdays April 30, 2025",
    "date": "April 30, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81312",
    "group": "Women Wednesdays"
  },
  {
    "name": "Women Wednesdays May 7, 2025",
    "date": "May 7, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81313",
    "group": "Women Wednesdays"
  },
  {
    "name": "Women Wednesdays May 14, 2025",
    "date": "May 14, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81314",
    "group": "Women Wednesdays"
  },
  {
    "name": "Women Wednesdays May 21, 2025",
    "date": "May 21, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81315",
    "group": "Women Wednesdays"
  },
  {
    "name": "Women Wednesdays May 28, 2025",
    "date": "May 28, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81316",
    "group": "Women Wednesdays"
  },
  {
    "name": "Women Wednesdays June 4, 2025",
    "date": "June 4, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81317",
    "group": "Women Wednesdays"
  },
  {
    "name": "Women Wednesdays June 11, 2025",
    "date": "June 11, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81318",
    "group": "Women Wednesdays"
  },
  {
    "name": "Women Wednesdays June 18, 2025",
    "date": "June 18, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81319",
    "group": "Women Wednesdays"
  },
  {
    "name": "Women Wednesdays June 25, 2025",
    "date": "June 25, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81320",
    "group": "Women Wednesdays"
  },
  {
    "name": "Women Wednesdays July 2, 2025",
    "date": "July 2, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81321",
    "group": "Women Wednesdays"
  },
  {
    "name": "Women Wednesdays July 9, 2025",
    "date": "July 9, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81322",
    "group": "Women Wednesdays"
  },
  {
    "name": "Women Wednesdays July 16, 2025",
    "date": "July 16, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81323",
    "group": "Women Wednesdays"
  },
  {
    "name": "Women Wednesdays July 23, 2025",
    "date": "July 23, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81324",
    "group": "Women Wednesdays"
  },
  {
    "name": "Women Wednesdays July 30, 2025",
    "date": "July 30, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81325",
    "group": "Women Wednesdays"
  },
  {
    "name": "Women Wednesdays August 6, 2025",
    "date": "August 6, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81326",
    "group": "Women Wednesdays"
  },
  {
    "name": "Women Wednesdays August 13, 2025",
    "date": "August 13, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81327",
    "group": "Women Wednesdays"
  },
  {
    "name": "Women Wednesdays August 20, 2025",
    "date": "August 20, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81329",
    "group": "Women Wednesdays"
  },
  {
    "name": "Women Wednesdays August 27, 2025",
    "date": "August 27, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81330",
    "group": "Women Wednesdays"
  },
  {
    "name": "Women Wednesdays September 3, 2025",
    "date": "September 3, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81331",
    "group": "Women Wednesdays"
  },
  {
    "name": "Women Wednesdays September 10, 2025",
    "date": "September 10, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81332",
    "group": "Women Wednesdays"
  },
  {
    "name": "Women Wednesdays September 17, 2025",
    "date": "September 17, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81333",
    "group": "Women Wednesdays"
  },
  {
    "name": "Women Wednesdays September 24, 2025",
    "date": "September 24, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81334",
    "group": "Women Wednesdays"
  },
  {
    "name": "Women Wednesdays October 1, 2025",
    "date": "October 1, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81340",
    "group": "Women Wednesdays"
  },
  {
    "name": "Women Wednesdays October 8, 2025",
    "date": "October 8, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81341",
    "group": "Women Wednesdays"
  },
  {
    "name": "Women Wednesdays October 15, 2025",
    "date": "October 15, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81342",
    "group": "Women Wednesdays"
  },
  {
    "name": "Women Wednesdays October 22, 2025",
    "date": "October 22, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81343",
    "group": "Women Wednesdays"
  },
  {
    "name": "Women Wednesdays October 29, 2025",
    "date": "October 29, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81344",
    "group": "Women Wednesdays"
  },
  {
    "name": "Women Wednesdays November 5, 2025",
    "date": "November 5, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81345",
    "group": "Women Wednesdays"
  },
  {
    "name": "Women Wednesdays November 12, 2025",
    "date": "November 12, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81346",
    "group": "Women Wednesdays"
  },
  {
    "name": "Women Wednesdays November 19, 2025",
    "date": "November 19, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81347",
    "group": "Women Wednesdays"
  },
  {
    "name": "Women Wednesdays November 26, 2025",
    "date": "November 26, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81348",
    "group": "Women Wednesdays"
  },
  {
    "name": "Women Wednesdays December 3, 2025",
    "date": "December 3, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81349",
    "group": "Women Wednesdays"
  },
  {
    "name": "Women Wednesdays December 10, 2025",
    "date": "December 10, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81350",
    "group": "Women Wednesdays"
  },
  {
    "name": "Women Wednesdays December 17, 2025",
    "date": "December 17, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81351",
    "group": "Women Wednesdays"
  },
  {
    "name": "Women Wednesdays December 24, 2025",
    "date": "December 24, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81352",
    "group": "Women Wednesdays"
  },
  {
    "name": "Women Wednesdays December 31, 2025",
    "date": "December 31, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81353",
    "group": "Women Wednesdays"
  },
  {
    "name": "Women Wednesdays January 7, 2026",
    "date": "January 7, 2026",
    "link": "url?id=242https://academy.hematology.org/mod/h5pactivity/view.php?id=81354",
    "group": "Women Wednesdays"
  },
  {
    "name": "Women Wednesdays February 4, 2026",
    "date": "February 4, 2026",
    "link": "url?id=242https://academy.hematology.org/mod/h5pactivity/view.php?id=81355",
    "group": "Women Wednesdays"
  },
  {
    "name": "Women Wednesdays March 4, 2026",
    "date": "March 4, 2026",
    "link": "https://academy.hematology.org/mod/h5pactivity/view.php?id=812462https://academy.hematology.org/mod/h5pactivity/view.php?id=81474",
    "group": "Women Wednesdays"
  },
  {
    "name": "Women Wednesdays April 1, 2026",
    "date": "April 1, 2026",
    "link": "https://academy.hematology.org/course/view.php?id=1763#url?id=143",
    "group": "Women Wednesdays"
  },
  {
    "name": "Women Wednesdays May 6, 2026",
    "date": "May 6, 2026",
    "link": "https://academy.hematology.org/course/view.php?id=1763#url?id=144",
    "group": "Women Wednesdays"
  },
  {
    "name": "Women Wednesdays June 3, 2026",
    "date": "June 3, 2026",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/45",
    "group": "Women Wednesdays"
  },
  {
    "name": "Women Wednesdays July 1, 2026",
    "date": "July 1, 2026",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81478",
    "group": "Women Wednesdays"
  },
  {
    "name": "Slide Saturdays October 12, 2024",
    "date": "October 12, 2024",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81361",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays October 19, 2024",
    "date": "October 19, 2024",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81364",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays October 26, 2024",
    "date": "October 26, 2024",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81365",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays November 02, 2024",
    "date": "November 02, 2024",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81366",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays November 09, 2024",
    "date": "November 09, 2024",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81367",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays November 16, 2024",
    "date": "November 16, 2024",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81368",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays November 23, 2024",
    "date": "November 23, 2024",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81369",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays December 14, 2024",
    "date": "December 14, 2024",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81370",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays December 21, 2024",
    "date": "December 21, 2024",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81371",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays December 28, 2024",
    "date": "December 28, 2024",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81372",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays January 04, 2025",
    "date": "January 04, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81373",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays January 11, 2025",
    "date": "January 11, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81374",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays January 18, 2025",
    "date": "January 18, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81375",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays January 25, 2025",
    "date": "January 25, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81376",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays February 01, 2025",
    "date": "February 01, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81377",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays February 08, 2025",
    "date": "February 08, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81378",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays February 15, 2025",
    "date": "February 15, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81379",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays February 22, 2025",
    "date": "February 22, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81380",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays March 01, 2025",
    "date": "March 01, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81381",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays March 08, 2025",
    "date": "March 08, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81382",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays March 15, 2025",
    "date": "March 15, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81383",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays March 22, 2025",
    "date": "March 22, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81384",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays March 29, 2025",
    "date": "March 29, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81385",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays April 05, 2025",
    "date": "April 05, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81386",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays April 12, 2025",
    "date": "April 12, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81387",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays April 19, 2025",
    "date": "April 19, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81388",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays April 26, 2025",
    "date": "April 26, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81389",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays May 03, 2025",
    "date": "May 03, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81390",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays May 10, 2025",
    "date": "May 10, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81391",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays May 17, 2025",
    "date": "May 17, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81392",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays May 24, 2025",
    "date": "May 24, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81393",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays May 31, 2025",
    "date": "May 31, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81394",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays June 07, 2025",
    "date": "June 07, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81395",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays June 14, 2025",
    "date": "June 14, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81396",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays June 21, 2025",
    "date": "June 21, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81397",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays June 28, 2025",
    "date": "June 28, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81398",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays July 05, 2025",
    "date": "July 05, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81399",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays July 12, 2025",
    "date": "July 12, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81400",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays July 19, 2025",
    "date": "July 19, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81401",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays July 26, 2025",
    "date": "July 26, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81402",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays August 02, 2025",
    "date": "August 02, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81403",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays August 09, 2025",
    "date": "August 09, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81404",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays August 16, 2025",
    "date": "August 16, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81405",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays August 23, 2025",
    "date": "August 23, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81406",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays August 30, 2025",
    "date": "August 30, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81407",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays September 06, 2025",
    "date": "September 06, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81408",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays September 13, 2025",
    "date": "September 13, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81409",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays September 20, 2025",
    "date": "September 20, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81410",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays September 27, 2025",
    "date": "September 27, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81411",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays October 04, 2025",
    "date": "October 04, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81412",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays October 11, 2025",
    "date": "October 11, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81413",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays October 18, 2025",
    "date": "October 18, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81414",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays October 25, 2025",
    "date": "October 25, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81415",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays November 01, 2025",
    "date": "November 01, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81416",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays November 08, 2025",
    "date": "November 08, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81417",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays November 15, 2025",
    "date": "November 15, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81418",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays November 22, 2025",
    "date": "November 22, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81419",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays November 29, 2025",
    "date": "November 29, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81420",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays December 06, 2025",
    "date": "December 06, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81421",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays December 13, 2025",
    "date": "December 13, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81422",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays December 20, 2025",
    "date": "December 20, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81423",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays December 27, 2025",
    "date": "December 27, 2025",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81424",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays January 03, 2026",
    "date": "January 03, 2026",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81425",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays January 10, 2026",
    "date": "January 10, 2026",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81426",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays January 17, 2026",
    "date": "January 17, 2026",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81427",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays January 24, 2026",
    "date": "January 24, 2026",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81428",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays January 31, 2026",
    "date": "January 31, 2026",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81429",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays February 07, 2026",
    "date": "February 07, 2026",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81434",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays February 14, 2026",
    "date": "February 14, 2026",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81435",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays February 21, 2026",
    "date": "February 21, 2026",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81436",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays February 28, 2026",
    "date": "February 28, 2026",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81437",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays March 07, 2026",
    "date": "March 07, 2026",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81439",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays March 14, 2026",
    "date": "March 14, 2026",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81440",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays March 21, 2026",
    "date": "March 21, 2026",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81441",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays March 28, 2026",
    "date": "March 28, 2026",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81442",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays April 04, 2026",
    "date": "April 04, 2026",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81443",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays April 11, 2026",
    "date": "April 11, 2026",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81444",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays April 18, 2026",
    "date": "April 18, 2026",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81445",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays April 25, 2026",
    "date": "April 25, 2026",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81446",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays May 02, 2026",
    "date": "May 02, 2026",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81447",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays May 09, 2026",
    "date": "May 09, 2026",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81448",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays May 16, 2026",
    "date": "May 16, 2026",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81480",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays May 23, 2026",
    "date": "May 23, 2026",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81481",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays May 30, 2026",
    "date": "May 30, 2026",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81482",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays June 6, 2026",
    "date": "June 6, 2026",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81483",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays June 13, 2926",
    "date": "June 13, 2926",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81484",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays June 20, 2026",
    "date": "June 20, 2026",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81485",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays June 27, 2026",
    "date": "June 27, 2026",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81486",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays July 4, 2026",
    "date": "July 4, 2026",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81487",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays July 11, 2026",
    "date": "July 11, 2026",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81488",
    "group": "Slide Saturdays"
  },
  {
    "name": "Slide Saturdays July 18, 2026",
    "date": "July 18, 2026",
    "link": "https://academy.hematology.org/course/view.php?id=1763#https://academy.hematology.org/mod/h5pactivity/view.php?id=81489",
    "group": "Slide Saturdays"
  }
];

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  let allActivities = [];
  let currentView = "tiles";
  let currentGroupFilter = "all";
  let currentCalYear = 2025;
  let currentCalMonth = 2; // March (0-indexed)

  // ── Helper: Base URL Resolution ──
  function getBaseUrl() {
    return window.ASH_MICROLEARNING_BASE_URL || ".";
  }

  // ── Helper: Parse Date Field ──
  function parseItemDate(item) {
    const months = monthNames;
    let year = 2025, month = 0, day = 1;
    
    if (item.date) {
      const parts = item.date.split(" ");
      if (parts.length >= 3) {
        const mStr = parts[0];
        const dStr = parts[1].replace(",", "");
        const yStr = parts[2];
        
        const mIdx = months.findIndex(m => m.toLowerCase() === mStr.toLowerCase());
        if (mIdx >= 0) month = mIdx;
        day = parseInt(dStr, 10) || 1;
        year = parseInt(yStr, 10) || 2025;
        if (year > 2050) year = 2026;
      }
    }
    return { year, month, day, dateStr: `${months[month]} ${day}, ${year}` };
  }

  function getLogo(group) {
    const bUrl = getBaseUrl();
    if (group.includes("Women")) return `${bUrl}/Women-Wednesday-Logo.png`;
    if (group.includes("Slide")) return `${bUrl}/Slide-Saturday-Logo.png`;
    return `${bUrl}/Trivia-Tuesday-Logo.png`;
  }

  function statusClass(s) {
    if (s === "completed") return "status-completed-correct";
    if (s === "wrong")     return "status-completed-wrong";
    if (s === "progress")  return "status-in-progress";
    return "status-not-attempted";
  }

  function statusIcon(s) {
    if (s === "completed") return `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
    if (s === "wrong")     return `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#dc2626" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
    if (s === "progress")  return `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#b45309" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`;
    return "";
  }

  // Process raw data into structured items
  function processActivities(raw) {
    return raw.map((item, idx) => {
      const dInfo = parseItemDate(item);
      let status = "empty";
      const rem = idx % 8;
      if (rem === 0 || rem === 4) status = "completed";
      else if (rem === 1) status = "wrong";
      else if (rem === 2) status = "progress";
      else status = "empty";

      return {
        ...item,
        year: dInfo.year,
        month: dInfo.month,
        day: dInfo.day,
        formattedDate: dInfo.dateStr,
        status: status,
        logo: getLogo(item.group || "")
      };
    }).sort((a, b) => (a.year - b.year) || (a.month - b.month) || (a.day - b.day));
  }

  // Load activities asynchronously with fallback
  async function initData() {
    let raw = EMBEDDED_ACTIVITIES;
    try {
      const bUrl = getBaseUrl();
      const res = await fetch(`${bUrl}/activities.json`);
      if (res.ok) {
        const fetched = await res.json();
        if (Array.isArray(fetched) && fetched.length > 0) {
          raw = fetched;
        }
      }
    } catch (e) {
      console.warn("Using embedded fallback dataset.", e);
    }
    allActivities = processActivities(raw);
    
    initControls();
    renderTilesView();
    renderTabsView();
    renderCalendarView();
  }

  // ── Controls & Switching ──
  function initControls() {
    const tilesBtn = document.getElementById("tilesViewBtn");
    const tabsBtn = document.getElementById("tabsViewBtn");
    const calendarBtn = document.getElementById("calendarViewBtn");
    
    const tilesSec = document.getElementById("tilesViewSection");
    const tabsSec = document.getElementById("tabsViewSection");
    const calendarSec = document.getElementById("calendarViewSection");

    function setView(v) {
      currentView = v;
      [tilesBtn, tabsBtn, calendarBtn].forEach(b => {
        if (b) {
          b.classList.remove("active");
          b.setAttribute("aria-selected", "false");
        }
      });
      [tilesSec, tabsSec, calendarSec].forEach(s => {
        if (s) s.classList.add("hidden");
      });

      if (v === "tiles") {
        if (tilesBtn) { tilesBtn.classList.add("active"); tilesBtn.setAttribute("aria-selected", "true"); }
        if (tilesSec) tilesSec.classList.remove("hidden");
        renderTilesView();
      } else if (v === "tabs") {
        if (tabsBtn) { tabsBtn.classList.add("active"); tabsBtn.setAttribute("aria-selected", "true"); }
        if (tabsSec) tabsSec.classList.remove("hidden");
        renderTabsView();
      } else {
        if (calendarBtn) { calendarBtn.classList.add("active"); calendarBtn.setAttribute("aria-selected", "true"); }
        if (calendarSec) calendarSec.classList.remove("hidden");
        renderCalendarView();
      }
    }

    if (tilesBtn) tilesBtn.addEventListener("click", () => setView("tiles"));
    if (tabsBtn) tabsBtn.addEventListener("click", () => setView("tabs"));
    if (calendarBtn) calendarBtn.addEventListener("click", () => setView("calendar"));

    // Filter pills in tiles view
    const filterBtns = document.querySelectorAll(".filter-btn");
    filterBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentGroupFilter = btn.getAttribute("data-group");
        renderTilesView();
      });
    });

    // Calendar select controls
    const mSelect = document.getElementById("monthSelect");
    const ySelect = document.getElementById("yearSelect");
    const prevBtn = document.getElementById("prevMonthBtn");
    const nextBtn = document.getElementById("nextMonthBtn");

    if (mSelect) {
      mSelect.innerHTML = "";
      monthNames.forEach((m, idx) => {
        const opt = document.createElement("option");
        opt.value = idx;
        opt.textContent = m;
        mSelect.appendChild(opt);
      });
      mSelect.value = currentCalMonth;
      mSelect.addEventListener("change", (e) => {
        currentCalMonth = parseInt(e.target.value, 10);
        renderCalendarView();
      });
    }

    if (ySelect) {
      ySelect.innerHTML = "";
      const years = [2024, 2025, 2026];
      years.forEach(y => {
        const opt = document.createElement("option");
        opt.value = y;
        opt.textContent = y;
        ySelect.appendChild(opt);
      });
      ySelect.value = currentCalYear;
      ySelect.addEventListener("change", (e) => {
        currentCalYear = parseInt(e.target.value, 10);
        renderCalendarView();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        currentCalMonth--;
        if (currentCalMonth < 0) {
          currentCalMonth = 11;
          currentCalYear--;
        }
        if (mSelect) mSelect.value = currentCalMonth;
        if (ySelect) ySelect.value = currentCalYear;
        renderCalendarView();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        currentCalMonth++;
        if (currentCalMonth > 11) {
          currentCalMonth = 0;
          currentCalYear++;
        }
        if (mSelect) mSelect.value = currentCalMonth;
        if (ySelect) ySelect.value = currentCalYear;
        renderCalendarView();
      });
    }
  }

  // ── Render Tiles View ──
  function renderTilesView() {
    const grid = document.getElementById("tilesGrid");
    const countEl = document.getElementById("activitiesCount");
    if (!grid) return;
    grid.innerHTML = "";

    const filtered = currentGroupFilter === "all"
      ? allActivities
      : allActivities.filter(x => x.group === currentGroupFilter);

    if (countEl) {
      countEl.textContent = `Showing ${filtered.length} of ${allActivities.length} activities`;
    }

    if (filtered.length === 0) {
      grid.innerHTML = `<div class="no-results" style="grid-column:1/-1;text-align:center;padding:40px;background:#fff;border-radius:16px;">No activities found.</div>`;
      return;
    }

    filtered.forEach(item => {
      const status = item.status || "empty";
      const sClass = statusClass(status);
      const icon = statusIcon(status);

      const tile = document.createElement(item.link ? "a" : "div");
      tile.className = `tile ${sClass}`;
      if (item.link) {
        tile.href = item.link;
        tile.target = "_blank";
        tile.rel = "noopener noreferrer";
      }
      tile.setAttribute("aria-label", `${item.group} – ${item.formattedDate} – ${status}`);

      const thumb = document.createElement("div");
      thumb.className = "tile-thumb";
      thumb.innerHTML = `<img src="${item.logo}" alt="${item.group}" class="tile-thumb-img" />`;

      const content = document.createElement("div");
      content.className = "tile-content";
      content.innerHTML = `
        <span class="tile-title">${item.group}</span>
        <span class="tile-date-sub">${item.formattedDate}</span>
      `;

      if (icon) {
        const badge = document.createElement("div");
        badge.className = "tile-status-badge";
        badge.innerHTML = icon;
        tile.appendChild(badge);
      }

      tile.appendChild(thumb);
      tile.appendChild(content);
      grid.appendChild(tile);
    });
  }

  // ── Render Tabs View ──
  function renderTabsView() {
    const container = document.getElementById("tabsContainer");
    if (!container) return;
    container.innerHTML = "";

    const groupsList = ["Trivia Tuesdays", "Women Wednesdays", "Slide Saturdays"];

    groupsList.forEach(groupName => {
      const items = allActivities.filter(x => x.group === groupName);
      if (items.length === 0) return;

      const logo = getLogo(groupName);
      const total = items.length;
      const completedCount = items.filter(x => x.status === "completed").length;
      const bodyId = `tabs-group-${groupName.replace(/[^a-zA-Z0-9]/g, "-")}`;

      const accEl = document.createElement("section");
      accEl.className = "month-accordion";

      const header = document.createElement("div");
      header.className = "accordion-header";
      header.setAttribute("role", "button");
      header.setAttribute("aria-expanded", "true");
      header.setAttribute("aria-controls", bodyId);
      header.setAttribute("tabindex", "0");

      header.innerHTML = `
        <div class="accordion-header-left">
          <img src="${logo}" alt="${groupName}" class="accordion-logo-img" />
          <span class="accordion-title">${groupName}</span>
          <span class="accordion-badge">${completedCount}/${total} completed</span>
        </div>
        <svg class="accordion-chevron" viewBox="0 0 24 24" width="22" height="22" fill="none"
            stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      `;

      function toggleAccordion() {
        const body = document.getElementById(bodyId);
        const chevron = header.querySelector(".accordion-chevron");
        const expanded = header.getAttribute("aria-expanded") === "true";
        header.setAttribute("aria-expanded", String(!expanded));
        if (body) body.classList.toggle("collapsed", expanded);
        if (chevron) chevron.classList.toggle("collapsed", expanded);
      }

      header.addEventListener("click", toggleAccordion);
      header.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggleAccordion();
        }
      });

      const body = document.createElement("div");
      body.className = "accordion-body";
      body.id = bodyId;

      const grid = document.createElement("div");
      grid.className = "tiles-grid";

      items.forEach(item => {
        const status = item.status || "empty";
        const sClass = statusClass(status);
        const icon = statusIcon(status);

        const tile = document.createElement(item.link ? "a" : "div");
        tile.className = `tile ${sClass}`;
        if (item.link) {
          tile.href = item.link;
          tile.target = "_blank";
          tile.rel = "noopener noreferrer";
        }
        tile.setAttribute("aria-label", `${item.group} – ${item.formattedDate} – ${status}`);

        const thumb = document.createElement("div");
        thumb.className = "tile-thumb";
        thumb.innerHTML = `<img src="${item.logo}" alt="${item.group}" class="tile-thumb-img" />`;

        const content = document.createElement("div");
        content.className = "tile-content";
        content.innerHTML = `
          <span class="tile-title">${item.group}</span>
          <span class="tile-date-sub">${item.formattedDate}</span>
        `;

        if (icon) {
          const badge = document.createElement("div");
          badge.className = "tile-status-badge";
          badge.innerHTML = icon;
          tile.appendChild(badge);
        }

        tile.appendChild(thumb);
        tile.appendChild(content);
        grid.appendChild(tile);
      });

      body.appendChild(grid);
      accEl.appendChild(header);
      accEl.appendChild(body);
      container.appendChild(accEl);
    });
  }

  // ── Render Calendar View ──
  function renderCalendarView() {
    const grid = document.getElementById("calendarGrid");
    if (!grid) return;
    grid.innerHTML = "";

    const year = currentCalYear;
    const month = currentCalMonth;

    const firstDay = new Date(year, month, 1).getDay(); // 0 = Sun
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const dayMap = {};
    allActivities.forEach(act => {
      if (act.year === year && act.month === month) {
        if (!dayMap[act.day]) dayMap[act.day] = [];
        dayMap[act.day].push(act);
      }
    });

    for (let i = 0; i < firstDay; i++) {
      const cell = document.createElement("div");
      cell.className = "cal-day-cell empty-slot";
      grid.appendChild(cell);
    }

    const today = new Date();
    const isCurrentMonthYear = today.getFullYear() === year && today.getMonth() === month;

    for (let day = 1; day <= daysInMonth; day++) {
      const cell = document.createElement("div");
      cell.className = "cal-day-cell";
      if (isCurrentMonthYear && today.getDate() === day) {
        cell.classList.add("today");
      }

      const dayHeader = document.createElement("div");
      dayHeader.className = "cal-day-header";
      dayHeader.innerHTML = `<span class="cal-day-number">${day}</span>`;
      cell.appendChild(dayHeader);

      const items = dayMap[day] || [];
      items.forEach(act => {
        const status = act.status || "empty";
        const sClass = statusClass(status);
        const icon = statusIcon(status);

        const card = document.createElement(act.link ? "a" : "div");
        card.className = `cal-activity-card ${sClass}`;
        if (act.link) {
          card.href = act.link;
          card.target = "_blank";
          card.rel = "noopener noreferrer";
        }
        card.setAttribute("aria-label", `${act.group} – ${act.formattedDate} – ${status}`);

        card.innerHTML = `
          <div class="cal-activity-top">
            <img src="${act.logo}" alt="${act.group}" class="cal-logo-img" />
            ${icon ? `<span class="cal-badge">${icon}</span>` : ""}
          </div>
          <span class="cal-activity-title">${act.group}</span>
        `;
        cell.appendChild(card);
      });

      grid.appendChild(cell);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initData);
  } else {
    initData();
  }
})();
