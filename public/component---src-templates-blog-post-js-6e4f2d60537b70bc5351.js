(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    yZlL: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "default", function () {
          return d;
        }),
        a.d(t, "query", function () {
          return s;
        });
      var n = a("q1tI"),
        r = a.n(n),
        l = a("aArQ"),
        m = a("Wbzz"),
        i = a("vrFN"),
        c = a("9eSz"),
        o = a.n(c),
        u = a("vOnD").c.div.withConfig({
          displayName: "blog-post__Outline",
          componentId: "sc-1g2ojw6-0",
        })(["border:1px solid blue;border-radius:1rem;"]);
      function d(e) {
        var t = e.data.markdownRemark;
        return r.a.createElement(
          l.a,
          null,
          r.a.createElement(i.a, {
            title: t.frontmatter.title + ", " + t.frontmatter.artist,
          }),
          r.a.createElement(
            "main",
            { className: "mx-auto", style: { maxWidth: "1000px" } },
            r.a.createElement(
              u,
              { className: "p-3" },
              r.a.createElement(
                "div",
                { className: "d-flex justify-content-between" },
                r.a.createElement(
                  "header",
                  null,
                  r.a.createElement("h2", null, t.frontmatter.artist),
                  r.a.createElement("h1", null, t.frontmatter.title)
                ),
                r.a.createElement(
                  "h2",
                  null,
                  r.a.createElement(m.Link, { to: "/" }, "✕")
                )
              ),
              r.a.createElement(o.a, {
                fluid: t.frontmatter.thumbnail.childImageSharp.fluid,
                className: "mt-4 mb-4",
              }),
              r.a.createElement("div", {
                dangerouslySetInnerHTML: { __html: t.html },
              })
            )
          )
        );
      }
      var s = "2490424086";
    },
  },
]);
//# sourceMappingURL=component---src-templates-blog-post-js-6e4f2d60537b70bc5351.js.map
