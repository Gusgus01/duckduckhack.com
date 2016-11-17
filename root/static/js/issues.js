this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["issues"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function";

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      <li class=\"";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.tags), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " clearfix\" data-repo=\"";
  if (helper = helpers.repo) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.repo); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n	<span>\n	  <a class=\"tx-clr--dk one-line issue-name\" href=\"https://github.com/duckduckgo/zeroclickinfo-";
  if (helper = helpers.repo) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.repo); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/issues/";
  if (helper = helpers.issue_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.issue_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n            ";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n          </a>\n	  <span class=\"tx-clr--lt tx-size--small\">\n            opened "
    + escapeExpression((helper = helpers.timeago || (depth0 && depth0.timeago),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.date), false, false, options) : helperMissing.call(depth0, "timeago", (depth0 && depth0.date), false, false, options)))
    + " ago by <a class=\"tx-clr--lt\" href=\"https://github.com/";
  if (helper = helpers.author) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.author); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.author) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.author); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a> \n	  </span>\n	</span>\n        <span class=\"issue-details pull-right\">\n          <a href=\"/ia/view/";
  if (helper = helpers.ia_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.ia_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"tx-clr--lt tx-size--small\">";
  if (helper = helpers.ia_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.ia_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n        </span>\n      </li>\n      ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "tag-"
    + escapeExpression((helper = helpers.slug || (depth0 && depth0.slug),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.name), options) : helperMissing.call(depth0, "slug", (depth0 && depth0.name), options)))
    + " ";
  return buffer;
  }

  buffer += "\n<div class=\"issues-list\">\n  <section>\n    <header class=\"more-space\">\n      <span class=\"pull-left tx-clr--dk\"><strong>Issues</strong></span>\n      <span class=\"pull-right\">\n	<a href=\"#\" class=\"tx-size--small filter-all tx-clr--lt\" data-type=\"all\" data-filter=\"\">All</a>\n	<a href=\"#\" class=\"tx-size--small filter-high tx-clr--lt\" data-type=\"high\" data-filter=\".tag-priorityhigh\">High Priority</a>\n	<a href=\"#\" class=\"tx-size--small filter-lhf tx-clr--lt\" data-type=\"lhf\" data-filter=\".tag-lowhangingfruit\">Low-Hanging Fruit</a>\n	<a href=\"#\" class=\"tx-size--small filter-bugs tx-clr--lt\" data-type=\"bugs\" data-filter=\".tag-bug\">Bugs</a>\n      </span>\n    </header>\n    <ul>\n      ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.by_date), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n  </section>\n</div>\n\n";
  return buffer;
  });