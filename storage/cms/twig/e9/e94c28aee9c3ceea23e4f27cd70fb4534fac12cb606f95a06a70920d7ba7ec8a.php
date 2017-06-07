<?php

/* /Users/lrodrigues/Projects/murakami/plugins/anandpatel/seoextension/components/cmspage/default.htm */
class __TwigTemplate_492d31add93d4127b25057cb8943a398e75fa25a2ffde59d3cdf001353ff2277 extends Twig_Template
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
        // line 1
        if (($context["hasBlog"] ?? null)) {
            // line 2
            echo "    ";
            $context['__placeholder_meta_default_contents'] = null;            ob_start();            // line 3
            echo "
    ";
            $context['__placeholder_meta_default_contents'] = ob_get_clean();            // line 2
            echo $this->env->getExtension('CMS')->displayBlock('meta', $context['__placeholder_meta_default_contents']);
            unset($context['__placeholder_meta_default_contents']);            // line 5
            echo "
";
        } else {
            // line 7
            echo "
    ";
            // line 8
            if ($this->getAttribute(($context["__SELF__"] ?? null), "redirect_url", array())) {
                // line 9
                echo "        <meta http-equiv=\"refresh\" content=\"0; url=";
                echo twig_escape_filter($this->env, $this->getAttribute(($context["__SELF__"] ?? null), "redirect_url", array()), "html", null, true);
                echo "\" />
    ";
            }
            // line 11
            echo "
    ";
            // line 12
            if ($this->getAttribute(($context["__SELF__"] ?? null), "seo_title", array())) {
                // line 13
                echo "        <title>";
                echo call_user_func_array($this->env->getFilter('generateTitle')->getCallable(), array($this->getAttribute(($context["__SELF__"] ?? null), "seo_title", array())));
                echo "</title>
    ";
            }
            // line 15
            echo "
    ";
            // line 16
            if ($this->getAttribute(($context["__SELF__"] ?? null), "seo_description", array())) {
                // line 17
                echo "        <meta name=\"description\" content=\"";
                echo twig_escape_filter($this->env, $this->getAttribute(($context["__SELF__"] ?? null), "seo_description", array()), "html", null, true);
                echo "\">

";
            }
            // line 20
            echo "    ";
            if ($this->getAttribute(($context["__SELF__"] ?? null), "seo_keywords", array())) {
                // line 21
                echo "        <meta name=\"keywords\" content=\"";
                echo twig_escape_filter($this->env, $this->getAttribute(($context["__SELF__"] ?? null), "seo_keywords", array()), "html", null, true);
                echo "\">
    ";
            }
            // line 23
            echo "
    ";
            // line 24
            if ($this->getAttribute(($context["__SELF__"] ?? null), "canonical_url", array())) {
                // line 25
                echo "        <link rel=\"canonical\" href=\"";
                echo twig_escape_filter($this->env, $this->getAttribute(($context["__SELF__"] ?? null), "canonical_url", array()), "html", null, true);
                echo "\" />
    ";
            } else {
                // line 27
                echo "        ";
                echo call_user_func_array($this->env->getFilter('generateCanonicalUrl')->getCallable(), array(""));
                echo "
    ";
            }
            // line 29
            echo "
    <meta name=\"robots\" content=\"";
            // line 30
            echo twig_escape_filter($this->env, $this->getAttribute(($context["__SELF__"] ?? null), "robot_index", array()), "html", null, true);
            echo ",";
            echo twig_escape_filter($this->env, $this->getAttribute(($context["__SELF__"] ?? null), "robot_follow", array()), "html", null, true);
            echo "\">

    ";
            // line 32
            echo call_user_func_array($this->env->getFilter('otherMetaTags')->getCallable(), array(""));
            echo "

    ";
            // line 34
            if ($this->getAttribute(($context["__SELF__"] ?? null), "ogTitle", array())) {
                // line 35
                echo "        <meta property=\"og:title\" content=\"";
                echo twig_escape_filter($this->env, $this->getAttribute(($context["__SELF__"] ?? null), "ogTitle", array()), "html", null, true);
                echo "\" />
    ";
            }
            // line 37
            echo "
    ";
            // line 38
            if ($this->getAttribute(($context["__SELF__"] ?? null), "ogUrl", array())) {
                // line 39
                echo "        <meta property=\"og:url\" content=\"";
                echo twig_escape_filter($this->env, $this->getAttribute(($context["__SELF__"] ?? null), "ogUrl", array()), "html", null, true);
                echo "\" />
    ";
            }
            // line 41
            echo "
    ";
            // line 42
            if ($this->getAttribute(($context["__SELF__"] ?? null), "ogSiteName", array())) {
                // line 43
                echo "        <meta property=\"og:site_name\" content=\"";
                echo twig_escape_filter($this->env, $this->getAttribute(($context["__SELF__"] ?? null), "ogSiteName", array()), "html", null, true);
                echo "\" />
    ";
            }
            // line 45
            echo "
    ";
            // line 46
            if ($this->getAttribute(($context["__SELF__"] ?? null), "ogDescription", array())) {
                // line 47
                echo "        <meta property=\"og:description\" content=\"";
                echo twig_escape_filter($this->env, $this->getAttribute(($context["__SELF__"] ?? null), "ogDescription", array()), "html", null, true);
                echo "\" />
    ";
            }
            // line 49
            echo "
    ";
            // line 50
            if ($this->getAttribute(($context["__SELF__"] ?? null), "ogFbAppId", array())) {
                // line 51
                echo "        <meta property=\"fb:app_id\" content=\"";
                echo twig_escape_filter($this->env, $this->getAttribute(($context["__SELF__"] ?? null), "ogFbAppId", array()), "html", null, true);
                echo "\" />
    ";
            }
            // line 53
            echo "
";
        }
    }

    public function getTemplateName()
    {
        return "/Users/lrodrigues/Projects/murakami/plugins/anandpatel/seoextension/components/cmspage/default.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  159 => 53,  153 => 51,  151 => 50,  148 => 49,  142 => 47,  140 => 46,  137 => 45,  131 => 43,  129 => 42,  126 => 41,  120 => 39,  118 => 38,  115 => 37,  109 => 35,  107 => 34,  102 => 32,  95 => 30,  92 => 29,  86 => 27,  80 => 25,  78 => 24,  75 => 23,  69 => 21,  66 => 20,  59 => 17,  57 => 16,  54 => 15,  48 => 13,  46 => 12,  43 => 11,  37 => 9,  35 => 8,  32 => 7,  28 => 5,  26 => 2,  23 => 3,  21 => 2,  19 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("{% if hasBlog %}
    {% placeholder meta default %}

    {% endplaceholder %}

{% else %}

    {% if __SELF__.redirect_url %}
        <meta http-equiv=\"refresh\" content=\"0; url={{__SELF__.redirect_url}}\" />
    {% endif %}

    {% if __SELF__.seo_title %}
        <title>{{__SELF__.seo_title | generateTitle}}</title>
    {% endif %}

    {% if __SELF__.seo_description %}
        <meta name=\"description\" content=\"{{__SELF__.seo_description}}\">

{% endif %}
    {% if __SELF__.seo_keywords %}
        <meta name=\"keywords\" content=\"{{__SELF__.seo_keywords}}\">
    {% endif %}

    {% if __SELF__.canonical_url %}
        <link rel=\"canonical\" href=\"{{__SELF__.canonical_url}}\" />
    {% else %}
        {{ '' | generateCanonicalUrl}}
    {% endif %}

    <meta name=\"robots\" content=\"{{__SELF__.robot_index}},{{__SELF__.robot_follow}}\">

    {{ ''|otherMetaTags|raw }}

    {% if __SELF__.ogTitle %}
        <meta property=\"og:title\" content=\"{{ __SELF__.ogTitle }}\" />
    {% endif %}

    {% if __SELF__.ogUrl %}
        <meta property=\"og:url\" content=\"{{ __SELF__.ogUrl }}\" />
    {% endif %}

    {% if __SELF__.ogSiteName %}
        <meta property=\"og:site_name\" content=\"{{ __SELF__.ogSiteName }}\" />
    {% endif %}

    {% if __SELF__.ogDescription %}
        <meta property=\"og:description\" content=\"{{ __SELF__.ogDescription }}\" />
    {% endif %}

    {% if __SELF__.ogFbAppId %}
        <meta property=\"fb:app_id\" content=\"{{ __SELF__.ogFbAppId  }}\" />
    {% endif %}

{% endif %}
", "/Users/lrodrigues/Projects/murakami/plugins/anandpatel/seoextension/components/cmspage/default.htm", "");
    }
}
