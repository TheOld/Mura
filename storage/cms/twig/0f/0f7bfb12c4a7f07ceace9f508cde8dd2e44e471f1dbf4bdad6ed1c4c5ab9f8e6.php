<?php

/* /Users/lrodrigues/Projects/murakami/themes/base/partials/site/nav.htm */
class __TwigTemplate_fbb3596b71ab412f3a5a52293083124bbe86a78dc4b8877f776715b68e666395 extends Twig_Template
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
        $context["nav"] = $this;
        // line 2
        echo "
";
        // line 23
        echo "
<nav id=\"layout-nav\" class=\"navbar\" role=\"navigation\">
    <div class=\"container\">
        <div class=\"navbar-header\">
            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-main-collapse\">
                <span class=\"icon-bar\"></span>
                <span class=\"icon-bar\"></span>
                <span class=\"icon-bar\"></span>
            </button>
            <a class=\"navbar-brand\" href=\"";
        // line 32
        echo $this->env->getExtension('Cms\Twig\Extension')->pageFilter("home");
        echo "\"></a>
        </div>
        <div class=\"collapse navbar-collapse navbar-main-collapse\">
            <ul class=\"nav navbar-nav\">
                ";
        // line 36
        echo $context["nav"]->getrender_menu($this->getAttribute(($context["mainMenu"] ?? null), "menuItems", array()));
        echo "
            </ul>
        </div>
    </div>
</nav>";
    }

    // line 3
    public function getrender_menu($__items__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals(array(
            "items" => $__items__,
            "varargs" => $__varargs__,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 4
            echo "    ";
            $context["nav"] = $this;
            // line 5
            echo "
    ";
            // line 6
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
            foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                // line 7
                echo "        ";
                if ($this->getAttribute($context["item"], "items", array())) {
                    // line 8
                    echo "            <li role=\"presentation\" class=\"dropdown ";
                    echo (($this->getAttribute($context["item"], "isActive", array())) ? ("active") : (""));
                    echo " ";
                    echo (($this->getAttribute($context["item"], "isChildActive", array())) ? ("child-active") : (""));
                    echo "\">
                <a href=\"";
                    // line 9
                    echo twig_escape_filter($this->env, $this->getAttribute($context["item"], "url", array()), "html", null, true);
                    echo "\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">
                    ";
                    // line 10
                    echo twig_escape_filter($this->env, (($this->getAttribute($context["item"], "code", array())) ? (call_user_func_array($this->env->getFilter('_')->getCallable(), array(("nav." . $this->getAttribute($context["item"], "code", array()))))) : ($this->getAttribute($context["item"], "title", array()))), "html", null, true);
                    echo " <span class=\"caret\"></span>
                </a>
                <ul class=\"dropdown-menu\">
                    ";
                    // line 13
                    echo $context["nav"]->getrender_menu($this->getAttribute($context["item"], "items", array()));
                    echo "
                </ul>
            </li>
        ";
                } else {
                    // line 17
                    echo "            <li role=\"presentation\" class=\"";
                    echo (($this->getAttribute($context["item"], "isActive", array())) ? ("active") : (""));
                    echo " ";
                    echo (($this->getAttribute($context["item"], "isChildActive", array())) ? ("child-active") : (""));
                    echo "\">
                <a href=\"";
                    // line 18
                    echo twig_escape_filter($this->env, $this->getAttribute($context["item"], "url", array()), "html", null, true);
                    echo "\">";
                    echo twig_escape_filter($this->env, (($this->getAttribute($context["item"], "code", array())) ? (call_user_func_array($this->env->getFilter('_')->getCallable(), array(("nav." . $this->getAttribute($context["item"], "code", array()))))) : ($this->getAttribute($context["item"], "title", array()))), "html", null, true);
                    echo "</a>
            </li>
        ";
                }
                // line 21
                echo "    ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        } catch (Throwable $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    public function getTemplateName()
    {
        return "/Users/lrodrigues/Projects/murakami/themes/base/partials/site/nav.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  115 => 21,  107 => 18,  100 => 17,  93 => 13,  87 => 10,  83 => 9,  76 => 8,  73 => 7,  69 => 6,  66 => 5,  63 => 4,  51 => 3,  42 => 36,  35 => 32,  24 => 23,  21 => 2,  19 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("{% import _self as nav %}

{% macro render_menu(items) %}
    {% import _self as nav %}

    {% for item in items %}
        {% if item.items %}
            <li role=\"presentation\" class=\"dropdown {{ item.isActive ? 'active' }} {{ item.isChildActive ? 'child-active' }}\">
                <a href=\"{{ item.url }}\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">
                    {{ item.code ? ('nav.'~item.code)|_ : item.title }} <span class=\"caret\"></span>
                </a>
                <ul class=\"dropdown-menu\">
                    {{ nav.render_menu(item.items) }}
                </ul>
            </li>
        {% else %}
            <li role=\"presentation\" class=\"{{ item.isActive ? 'active' }} {{ item.isChildActive ? 'child-active' }}\">
                <a href=\"{{ item.url }}\">{{ item.code ? ('nav.'~item.code)|_ : item.title }}</a>
            </li>
        {% endif %}
    {% endfor %}
{% endmacro %}

<nav id=\"layout-nav\" class=\"navbar\" role=\"navigation\">
    <div class=\"container\">
        <div class=\"navbar-header\">
            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-main-collapse\">
                <span class=\"icon-bar\"></span>
                <span class=\"icon-bar\"></span>
                <span class=\"icon-bar\"></span>
            </button>
            <a class=\"navbar-brand\" href=\"{{ 'home'|page }}\"></a>
        </div>
        <div class=\"collapse navbar-collapse navbar-main-collapse\">
            <ul class=\"nav navbar-nav\">
                {{ nav.render_menu(mainMenu.menuItems) }}
            </ul>
        </div>
    </div>
</nav>", "/Users/lrodrigues/Projects/murakami/themes/base/partials/site/nav.htm", "");
    }
}
