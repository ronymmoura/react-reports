import React, { Component } from 'react';

import { Report, ReportHeader, Page, ReportFooter, PageBreak } from "./components";

class App extends Component {
	render() {
		return (
			<Report>

                <ReportHeader height={50}>
                    <div className={"text-primary"}>React Reports Header</div>
                </ReportHeader>

                <Page>
                    <h1>
                        Example Document
                    </h1>
                    <p>
                        This is an example document that shows how to have a footer that repeats at the bottom of every page, but also isn't covered up by paragraph text.
                    </p>
                    <h3>
                        Example Section I
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum metus sit amet urna lobortis sollicitudin. Nulla mattis purus porta lorem tempor, a cursus tellus facilisis. Aliquam pretium nibh vitae elit placerat vestibulum. Duis felis ipsum, consectetur id pellentesque in, porta sit amet sapien. Ut tristique enim sem, laoreet bibendum nisl fermentum vitae. Ut aliquet sem ac lorem malesuada sodales. Fusce iaculis ipsum ex, in mollis dolor dapibus sit amet. In convallis felis in orci fermentum gravida a vel orci. Sed tincidunt porta nibh sit amet varius. Donec et odio eget odio tempus auctor ac eget ex.

                        Pellentesque vitae augue sed purus dictum ultricies at eu neque. Nullam ut mauris a purus tristique euismod. Sed elementum, leo id placerat congue, leo tellus pharetra orci, eget ultricies odio quam sit amet ipsum. Praesent feugiat, lorem at commodo egestas, felis ligula pharetra sapien, in placerat mauris nisi aliquet tortor. Quisque nibh lectus, laoreet vel mollis a, tincidunt vel ipsum. Sed blandit vehicula sollicitudin. Donec et sapien justo. Ut fermentum ipsum imperdiet diam condimentum, eget varius sapien dictum. Sed sed elit egestas libero maximus finibus eu eget massa.

                        Duis finibus vestibulum finibus. Nunc lobortis lacus ut libero mattis tempor. Nulla a nunc at nisl elementum congue. Nunc eu consectetur mauris. Etiam non placerat massa. Etiam eu urna in metus tempus molestie sed eget diam. Nunc sem velit, elementum sit amet fringilla in, dictum sit amet sem. Quisque convallis faucibus purus dignissim dictum. Sed semper, mi vel accumsan sollicitudin, massa massa pellentesque justo, eget auctor sapien enim ac elit.

                        Nullam turpis augue, lacinia ut libero ac, rhoncus bibendum ligula. Mauris ullamcorper maximus turpis, a consequat turpis bibendum sit amet. Nam vitae dui nec velit hendrerit faucibus. Vivamus nunc diam, porta tristique augue nec, dignissim venenatis felis. Proin mattis id risus in feugiat. Etiam cursus faucibus nisi. In in nisi ullamcorper, convallis lectus et, ornare nulla. Cras tristique nulla eros, non maximus odio imperdiet eu. Nullam egestas dignissim est, et fringilla odio pretium eleifend. Nullam tincidunt sapien fermentum, rhoncus risus ac, ullamcorper libero. Vestibulum bibendum molestie dui nec tincidunt. Mauris tempus, orci ut congue vulputate, erat orci aliquam orci, sed eleifend orci dui sed tellus. Pellentesque pellentesque massa vulputate urna pretium, consectetur pulvinar orci pulvinar.

                        Donec aliquet imperdiet ex, et tincidunt risus convallis eget. Etiam eu fermentum lectus, molestie eleifend nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam dignissim, erat vitae congue molestie, ante urna sagittis est, et sagittis lacus risus vitae est. Sed elementum ipsum et pellentesque dignissim. Sed vehicula feugiat pretium. Donec ex lacus, dictum faucibus lectus sit amet, tempus hendrerit ante. Ut sollicitudin sodales metus, at placerat risus viverra ut.

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum metus sit amet urna lobortis sollicitudin. Nulla mattis purus porta lorem tempor, a cursus tellus facilisis. Aliquam pretium nibh vitae elit placerat vestibulum. Duis felis ipsum, consectetur id pellentesque in, porta sit amet sapien. Ut tristique enim sem, laoreet bibendum nisl fermentum vitae. Ut aliquet sem ac lorem malesuada sodales. Fusce iaculis ipsum ex, in mollis dolor dapibus sit amet. In convallis felis in orci fermentum gravida a vel orci. Sed tincidunt porta nibh sit amet varius. Donec et odio eget odio tempus auctor ac eget ex.

                        Duis finibus vestibulum finibus. Nunc lobortis lacus ut libero mattis tempor. Nulla a nunc at nisl elementum congue. Nunc eu consectetur mauris. Etiam non placerat massa. Etiam eu urna in metus tempus molestie sed eget diam. Nunc sem velit, elementum sit amet fringilla in, dictum sit amet sem. Quisque convallis faucibus purus dignissim dictum. Sed semper, mi vel accumsan sollicitudin, massa massa pellentesque justo, eget auctor sapien enim ac elit.

                        Nullam turpis augue, lacinia ut libero ac, rhoncus bibendum ligula. Mauris ullamcorper maximus turpis, a consequat turpis bibendum sit amet. Nam vitae dui nec velit hendrerit faucibus. Vivamus nunc diam, porta tristique augue nec, dignissim venenatis felis. Proin mattis id risus in feugiat. Etiam cursus faucibus nisi. In in nisi ullamcorper, convallis lectus et, ornare nulla. Cras tristique nulla eros, non maximus odio imperdiet eu. Nullam egestas dignissim est, et fringilla odio pretium eleifend. Nullam tincidunt sapien fermentum, rhoncus risus ac, ullamcorper libero.
                    </p>
                </Page>

                <PageBreak />

                <Page>
                    <h3>Example Section II</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum metus sit amet urna lobortis sollicitudin. Nulla mattis purus porta lorem tempor, a cursus tellus facilisis. Aliquam pretium nibh vitae elit placerat vestibulum. Duis felis ipsum, consectetur id pellentesque in, porta sit amet sapien. Ut tristique enim sem, laoreet bibendum nisl fermentum vitae. Ut aliquet sem ac lorem malesuada sodales. Fusce iaculis ipsum ex, in mollis dolor dapibus sit amet. In convallis felis in orci fermentum gravida a vel orci. Sed tincidunt porta nibh sit amet varius. Donec et odio eget odio tempus auctor ac eget ex.
                        Pellentesque vitae augue sed purus dictum ultricies at eu neque. Nullam ut mauris a purus tristique euismod. Sed elementum, leo id placerat congue, leo tellus pharetra orci, eget ultricies odio quam sit amet ipsum. Praesent feugiat, lorem at commodo egestas, felis ligula pharetra sapien, in placerat mauris nisi aliquet tortor. Quisque nibh lectus, laoreet vel mollis a, tincidunt vel ipsum. Sed blandit vehicula sollicitudin. Donec et sapien justo. Ut fermentum ipsum imperdiet diam condimentum, eget varius sapien dictum. Sed sed elit egestas libero maximus finibus eu eget massa.
                    </p>
                </Page>

                <PageBreak />

                <Page>
                    <h3>
                        Example Section I
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum metus sit amet urna lobortis sollicitudin. Nulla mattis purus porta lorem tempor, a cursus tellus facilisis. Aliquam pretium nibh vitae elit placerat vestibulum. Duis felis ipsum, consectetur id pellentesque in, porta sit amet sapien. Ut tristique enim sem, laoreet bibendum nisl fermentum vitae. Ut aliquet sem ac lorem malesuada sodales. Fusce iaculis ipsum ex, in mollis dolor dapibus sit amet. In convallis felis in orci fermentum gravida a vel orci. Sed tincidunt porta nibh sit amet varius. Donec et odio eget odio tempus auctor ac eget ex.

                        Pellentesque vitae augue sed purus dictum ultricies at eu neque. Nullam ut mauris a purus tristique euismod. Sed elementum, leo id placerat congue, leo tellus pharetra orci, eget ultricies odio quam sit amet ipsum. Praesent feugiat, lorem at commodo egestas, felis ligula pharetra sapien, in placerat mauris nisi aliquet tortor. Quisque nibh lectus, laoreet vel mollis a, tincidunt vel ipsum. Sed blandit vehicula sollicitudin. Donec et sapien justo. Ut fermentum ipsum imperdiet diam condimentum, eget varius sapien dictum. Sed sed elit egestas libero maximus finibus eu eget massa.

                        Duis finibus vestibulum finibus. Nunc lobortis lacus ut libero mattis tempor. Nulla a nunc at nisl elementum congue. Nunc eu consectetur mauris. Etiam non placerat massa. Etiam eu urna in metus tempus molestie sed eget diam. Nunc sem velit, elementum sit amet fringilla in, dictum sit amet sem. Quisque convallis faucibus purus dignissim dictum. Sed semper, mi vel accumsan sollicitudin, massa massa pellentesque justo, eget auctor sapien enim ac elit.

                        Nullam turpis augue, lacinia ut libero ac, rhoncus bibendum ligula. Mauris ullamcorper maximus turpis, a consequat turpis bibendum sit amet. Nam vitae dui nec velit hendrerit faucibus. Vivamus nunc diam, porta tristique augue nec, dignissim venenatis felis. Proin mattis id risus in feugiat. Etiam cursus faucibus nisi. In in nisi ullamcorper, convallis lectus et, ornare nulla. Cras tristique nulla eros, non maximus odio imperdiet eu. Nullam egestas dignissim est, et fringilla odio pretium eleifend. Nullam tincidunt sapien fermentum, rhoncus risus ac, ullamcorper libero. Vestibulum bibendum molestie dui nec tincidunt. Mauris tempus, orci ut congue vulputate, erat orci aliquam orci, sed eleifend orci dui sed tellus. Pellentesque pellentesque massa vulputate urna pretium, consectetur pulvinar orci pulvinar.

                        Donec aliquet imperdiet ex, et tincidunt risus convallis eget. Etiam eu fermentum lectus, molestie eleifend nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam dignissim, erat vitae congue molestie, ante urna sagittis est, et sagittis lacus risus vitae est. Sed elementum ipsum et pellentesque dignissim. Sed vehicula feugiat pretium. Donec ex lacus, dictum faucibus lectus sit amet, tempus hendrerit ante. Ut sollicitudin sodales metus, at placerat risus viverra ut.

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum metus sit amet urna lobortis sollicitudin. Nulla mattis purus porta lorem tempor, a cursus tellus facilisis. Aliquam pretium nibh vitae elit placerat vestibulum. Duis felis ipsum, consectetur id pellentesque in, porta sit amet sapien. Ut tristique enim sem, laoreet bibendum nisl fermentum vitae. Ut aliquet sem ac lorem malesuada sodales. Fusce iaculis ipsum ex, in mollis dolor dapibus sit amet. In convallis felis in orci fermentum gravida a vel orci. Sed tincidunt porta nibh sit amet varius. Donec et odio eget odio tempus auctor ac eget ex.

                        Duis finibus vestibulum finibus. Nunc lobortis lacus ut libero mattis tempor. Nulla a nunc at nisl elementum congue. Nunc eu consectetur mauris. Etiam non placerat massa. Etiam eu urna in metus tempus molestie sed eget diam. Nunc sem velit, elementum sit amet fringilla in, dictum sit amet sem. Quisque convallis faucibus purus dignissim dictum. Sed semper, mi vel accumsan sollicitudin, massa massa pellentesque justo, eget auctor sapien enim ac elit.

                        Nullam turpis augue, lacinia ut libero ac, rhoncus bibendum ligula. Mauris ullamcorper maximus turpis, a consequat turpis bibendum sit amet. Nam vitae dui nec velit hendrerit faucibus. Vivamus nunc diam, porta tristique augue nec, dignissim venenatis felis. Proin mattis id risus in feugiat. Etiam cursus faucibus nisi. In in nisi ullamcorper, convallis lectus et, ornare nulla. Cras tristique nulla eros, non maximus odio imperdiet eu. Nullam egestas dignissim est, et fringilla odio pretium eleifend. Nullam tincidunt sapien fermentum, rhoncus risus ac, ullamcorper libero.
                    </p>
                </Page>

                <PageBreak />

                <Page>
                    <h3>Example Section II</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum metus sit amet urna lobortis sollicitudin. Nulla mattis purus porta lorem tempor, a cursus tellus facilisis. Aliquam pretium nibh vitae elit placerat vestibulum. Duis felis ipsum, consectetur id pellentesque in, porta sit amet sapien. Ut tristique enim sem, laoreet bibendum nisl fermentum vitae. Ut aliquet sem ac lorem malesuada sodales. Fusce iaculis ipsum ex, in mollis dolor dapibus sit amet. In convallis felis in orci fermentum gravida a vel orci. Sed tincidunt porta nibh sit amet varius. Donec et odio eget odio tempus auctor ac eget ex.
                        Pellentesque vitae augue sed purus dictum ultricies at eu neque. Nullam ut mauris a purus tristique euismod. Sed elementum, leo id placerat congue, leo tellus pharetra orci, eget ultricies odio quam sit amet ipsum. Praesent feugiat, lorem at commodo egestas, felis ligula pharetra sapien, in placerat mauris nisi aliquet tortor. Quisque nibh lectus, laoreet vel mollis a, tincidunt vel ipsum. Sed blandit vehicula sollicitudin. Donec et sapien justo. Ut fermentum ipsum imperdiet diam condimentum, eget varius sapien dictum. Sed sed elit egestas libero maximus finibus eu eget massa.
                    </p>
                </Page>

                <PageBreak />

                <Page>
                    <h3>
                        Example Section I
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum metus sit amet urna lobortis sollicitudin. Nulla mattis purus porta lorem tempor, a cursus tellus facilisis. Aliquam pretium nibh vitae elit placerat vestibulum. Duis felis ipsum, consectetur id pellentesque in, porta sit amet sapien. Ut tristique enim sem, laoreet bibendum nisl fermentum vitae. Ut aliquet sem ac lorem malesuada sodales. Fusce iaculis ipsum ex, in mollis dolor dapibus sit amet. In convallis felis in orci fermentum gravida a vel orci. Sed tincidunt porta nibh sit amet varius. Donec et odio eget odio tempus auctor ac eget ex.

                        Pellentesque vitae augue sed purus dictum ultricies at eu neque. Nullam ut mauris a purus tristique euismod. Sed elementum, leo id placerat congue, leo tellus pharetra orci, eget ultricies odio quam sit amet ipsum. Praesent feugiat, lorem at commodo egestas, felis ligula pharetra sapien, in placerat mauris nisi aliquet tortor. Quisque nibh lectus, laoreet vel mollis a, tincidunt vel ipsum. Sed blandit vehicula sollicitudin. Donec et sapien justo. Ut fermentum ipsum imperdiet diam condimentum, eget varius sapien dictum. Sed sed elit egestas libero maximus finibus eu eget massa.

                        Duis finibus vestibulum finibus. Nunc lobortis lacus ut libero mattis tempor. Nulla a nunc at nisl elementum congue. Nunc eu consectetur mauris. Etiam non placerat massa. Etiam eu urna in metus tempus molestie sed eget diam. Nunc sem velit, elementum sit amet fringilla in, dictum sit amet sem. Quisque convallis faucibus purus dignissim dictum. Sed semper, mi vel accumsan sollicitudin, massa massa pellentesque justo, eget auctor sapien enim ac elit.

                        Nullam turpis augue, lacinia ut libero ac, rhoncus bibendum ligula. Mauris ullamcorper maximus turpis, a consequat turpis bibendum sit amet. Nam vitae dui nec velit hendrerit faucibus. Vivamus nunc diam, porta tristique augue nec, dignissim venenatis felis. Proin mattis id risus in feugiat. Etiam cursus faucibus nisi. In in nisi ullamcorper, convallis lectus et, ornare nulla. Cras tristique nulla eros, non maximus odio imperdiet eu. Nullam egestas dignissim est, et fringilla odio pretium eleifend. Nullam tincidunt sapien fermentum, rhoncus risus ac, ullamcorper libero. Vestibulum bibendum molestie dui nec tincidunt. Mauris tempus, orci ut congue vulputate, erat orci aliquam orci, sed eleifend orci dui sed tellus. Pellentesque pellentesque massa vulputate urna pretium, consectetur pulvinar orci pulvinar.

                        Donec aliquet imperdiet ex, et tincidunt risus convallis eget. Etiam eu fermentum lectus, molestie eleifend nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam dignissim, erat vitae congue molestie, ante urna sagittis est, et sagittis lacus risus vitae est. Sed elementum ipsum et pellentesque dignissim. Sed vehicula feugiat pretium. Donec ex lacus, dictum faucibus lectus sit amet, tempus hendrerit ante. Ut sollicitudin sodales metus, at placerat risus viverra ut.

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum metus sit amet urna lobortis sollicitudin. Nulla mattis purus porta lorem tempor, a cursus tellus facilisis. Aliquam pretium nibh vitae elit placerat vestibulum. Duis felis ipsum, consectetur id pellentesque in, porta sit amet sapien. Ut tristique enim sem, laoreet bibendum nisl fermentum vitae. Ut aliquet sem ac lorem malesuada sodales. Fusce iaculis ipsum ex, in mollis dolor dapibus sit amet. In convallis felis in orci fermentum gravida a vel orci. Sed tincidunt porta nibh sit amet varius. Donec et odio eget odio tempus auctor ac eget ex.

                        Duis finibus vestibulum finibus. Nunc lobortis lacus ut libero mattis tempor. Nulla a nunc at nisl elementum congue. Nunc eu consectetur mauris. Etiam non placerat massa. Etiam eu urna in metus tempus molestie sed eget diam. Nunc sem velit, elementum sit amet fringilla in, dictum sit amet sem. Quisque convallis faucibus purus dignissim dictum. Sed semper, mi vel accumsan sollicitudin, massa massa pellentesque justo, eget auctor sapien enim ac elit.

                        Nullam turpis augue, lacinia ut libero ac, rhoncus bibendum ligula. Mauris ullamcorper maximus turpis, a consequat turpis bibendum sit amet. Nam vitae dui nec velit hendrerit faucibus. Vivamus nunc diam, porta tristique augue nec, dignissim venenatis felis. Proin mattis id risus in feugiat. Etiam cursus faucibus nisi. In in nisi ullamcorper, convallis lectus et, ornare nulla. Cras tristique nulla eros, non maximus odio imperdiet eu. Nullam egestas dignissim est, et fringilla odio pretium eleifend. Nullam tincidunt sapien fermentum, rhoncus risus ac, ullamcorper libero.
                    </p>
                </Page>

                <PageBreak />
                
                <Page>
                    <h3>Example Section II</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum metus sit amet urna lobortis sollicitudin. Nulla mattis purus porta lorem tempor, a cursus tellus facilisis. Aliquam pretium nibh vitae elit placerat vestibulum. Duis felis ipsum, consectetur id pellentesque in, porta sit amet sapien. Ut tristique enim sem, laoreet bibendum nisl fermentum vitae. Ut aliquet sem ac lorem malesuada sodales. Fusce iaculis ipsum ex, in mollis dolor dapibus sit amet. In convallis felis in orci fermentum gravida a vel orci. Sed tincidunt porta nibh sit amet varius. Donec et odio eget odio tempus auctor ac eget ex.
                        Pellentesque vitae augue sed purus dictum ultricies at eu neque. Nullam ut mauris a purus tristique euismod. Sed elementum, leo id placerat congue, leo tellus pharetra orci, eget ultricies odio quam sit amet ipsum. Praesent feugiat, lorem at commodo egestas, felis ligula pharetra sapien, in placerat mauris nisi aliquet tortor. Quisque nibh lectus, laoreet vel mollis a, tincidunt vel ipsum. Sed blandit vehicula sollicitudin. Donec et sapien justo. Ut fermentum ipsum imperdiet diam condimentum, eget varius sapien dictum. Sed sed elit egestas libero maximus finibus eu eget massa.
                    </p>
                </Page>

                <ReportFooter height={50}>
                    <div className={"text-primary"}>React Reports Footer</div>
                </ReportFooter>
			</Report>
		);
	}
}

export default App;