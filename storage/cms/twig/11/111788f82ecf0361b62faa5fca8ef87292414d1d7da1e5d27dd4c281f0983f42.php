<?php

/* /Users/lrodrigues/Projects/murakami/themes/base/partials/site/subnav.htm */
class __TwigTemplate_c94581d9b0687d850ffc7739ebb7dd6e38601acf23a17930879b1b0f89d3c82a extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 2
        echo "
";
        // line 3
        $context["parentOrSelf"] = (($this->getAttribute(($context["page"] ?? null), "parent", array())) ? ($this->getAttribute(($context["page"] ?? null), "parent", array())) : (($context["page"] ?? null)));
        // line 4
        $context["childPages"] = $this->getAttribute(($context["parentOrSelf"] ?? null), "children", array());
        // line 5
        echo "<div class=\"container\">
    <div class=\"row\">
        <div class=\"col-sm-8\">
            <a href=\"mailto:contato@muraempresarial.com.br\" class=\"subnav__contact--email\">
                contato@muraempresarial.com.br
            </a>
            <a href=\"call:4833078753\" class=\"subnav__contact--phone\">| 48.33077853</a>
        </div>
        <div class=\"col-sm-4\">
            <ul class=\"nav nav-pills pull-right\">
                ";
        // line 15
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["childPages"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["childPage"]) {
            if ( !$this->getAttribute($context["childPage"], "navigation_hidden", array())) {
                // line 16
                echo "                    <li class=\"";
                echo ((($this->getAttribute(($context["page"] ?? null), "url", array()) == $this->getAttribute($context["childPage"], "url", array()))) ? ("active") : (""));
                echo "\">
                        <a href=\"";
                // line 17
                echo $this->env->getExtension('System\Twig\Extension')->appFilter($this->getAttribute($context["childPage"], "url", array()));
                echo "\">
                            ";
                // line 18
                echo twig_escape_filter($this->env, $this->getAttribute($context["childPage"], "title", array()), "html", null, true);
                echo "
                        </a>
                    </li>
                ";
            }
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['childPage'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 22
        echo "            </ul>
        </div>
    </div>
</div>";
    }

    public function getTemplateName()
    {
        return "/Users/lrodrigues/Projects/murakami/themes/base/partials/site/subnav.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  63 => 22,  52 => 18,  48 => 17,  43 => 16,  38 => 15,  26 => 5,  24 => 4,  22 => 3,  19 => 2,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("{# Renders a menu with any child static pages #}

{% set parentOrSelf = page.parent ?: page %}
{% set childPages = parentOrSelf.children %}
<div class=\"container\">
    <div class=\"row\">
        <div class=\"col-sm-8\">
            <a href=\"mailto:contato@muraempresarial.com.br\" class=\"subnav__contact--email\">
                contato@muraempresarial.com.br
            </a>
            <a href=\"call:4833078753\" class=\"subnav__contact--phone\">| 48.33077853</a>
        </div>
        <div class=\"col-sm-4\">
            <ul class=\"nav nav-pills pull-right\">
                {% for childPage in childPages if not childPage.navigation_hidden %}
                    <li class=\"{{ page.url == childPage.url ? 'active' }}\">
                        <a href=\"{{ childPage.url|app }}\">
                            {{ childPage.title }}
                        </a>
                    </li>
                {% endfor %}
            </ul>
        </div>
    </div>
</div>", "/Users/lrodrigues/Projects/murakami/themes/base/partials/site/subnav.htm", "");
    }
}
