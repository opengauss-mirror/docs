# PostGIS支持和限制<a name="ZH-CN_TOPIC_0000001201437540"></a>

## 支持数据类型<a name="section59521232327"></a>

openGauss的PostGIS Extension支持如下数据类型：

-   box2d
-   box3d
-   geometry\_dump
-   geometry
-   geography

## 支持的操作符和函数列表<a name="section1198813519310"></a>

**表 1** **PostGIS Extension支持的操作符和函数列表**

<a name="table18970162111535"></a>
<table><thead align="left"><tr id="row99711021145319"><th class="cellrowborder" valign="top" width="21.15%" id="mcps1.2.3.1.1"><p id="p149718214536"><a name="p149718214536"></a><a name="p149718214536"></a>函数分类</p>
</th>
<th class="cellrowborder" valign="top" width="78.85%" id="mcps1.2.3.1.2"><p id="p1897112175318"><a name="p1897112175318"></a><a name="p1897112175318"></a>包含函数</p>
</th>
</tr>
</thead>
<tbody><tr id="row14971152165319"><td class="cellrowborder" valign="top" width="21.15%" headers="mcps1.2.3.1.1 "><p id="p203181644115312"><a name="p203181644115312"></a><a name="p203181644115312"></a>Management Functions</p>
</td>
<td class="cellrowborder" valign="top" width="78.85%" headers="mcps1.2.3.1.2 "><p id="p497162116533"><a name="p497162116533"></a><a name="p497162116533"></a>AddGeometryColumn、DropGeometryColumn、DropGeometryTable、PostGIS_Full_Version、PostGIS_GEOS_Version、PostGIS_Liblwgeom_Version、PostGIS_Lib_Build_Date、PostGIS_Lib_Version、PostGIS_PROJ_Version、PostGIS_Scripts_Build_Date、PostGIS_Scripts_Installed、PostGIS_Version、PostGIS_LibXML_Version、PostGIS_Scripts_Released、Populate_Geometry_Columns 、UpdateGeometrySRID</p>
</td>
</tr>
<tr id="row1797192135316"><td class="cellrowborder" valign="top" width="21.15%" headers="mcps1.2.3.1.1 "><p id="p1055125895312"><a name="p1055125895312"></a><a name="p1055125895312"></a>Geometry Constructors</p>
</td>
<td class="cellrowborder" valign="top" width="78.85%" headers="mcps1.2.3.1.2 "><p id="p7971321155318"><a name="p7971321155318"></a><a name="p7971321155318"></a>ST_BdPolyFromText 、ST_BdMPolyFromText 、ST_Box2dFromGeoHash、ST_GeogFromText、ST_GeographyFromText、ST_GeogFromWKB、ST_GeomCollFromText、ST_GeomFromEWKB、ST_GeomFromEWKT、ST_GeometryFromText、ST_GeomFromGeoHash、ST_GeomFromGML、ST_GeomFromGeoJSON、ST_GeomFromKML、ST_GMLToSQL、ST_GeomFromText 、ST_GeomFromWKB、ST_LineFromMultiPoint、ST_LineFromText、ST_LineFromWKB、ST_LinestringFromWKB、ST_MakeBox2D、ST_3DMakeBox、ST_MakeEnvelope、ST_MakePolygon、ST_MakePoint、ST_MakePointM、ST_MLineFromText、ST_MPointFromText、ST_MPolyFromText、ST_Point、ST_PointFromGeoHash、ST_PointFromText、ST_PointFromWKB、ST_Polygon、ST_PolygonFromText、ST_WKBToSQL、ST_WKTToSQL</p>
</td>
</tr>
<tr id="row297113213531"><td class="cellrowborder" valign="top" width="21.15%" headers="mcps1.2.3.1.1 "><p id="p749821415413"><a name="p749821415413"></a><a name="p749821415413"></a>Geometry Accessors</p>
</td>
<td class="cellrowborder" valign="top" width="78.85%" headers="mcps1.2.3.1.2 "><p id="p697142115532"><a name="p697142115532"></a><a name="p697142115532"></a>GeometryType、ST_Boundary、ST_CoordDim、ST_Dimension、ST_EndPoint、ST_Envelope、ST_ExteriorRing、ST_GeometryN、ST_GeometryType、ST_InteriorRingN、ST_IsClosed、ST_IsCollection、ST_IsEmpty、ST_IsRing、ST_IsSimple、ST_IsValid、ST_IsValidReason、ST_IsValidDetail、ST_M、ST_NDims、ST_NPoints、ST_NRings、ST_NumGeometries、ST_NumInteriorRings、ST_NumInteriorRing、ST_NumPatches、ST_NumPoints、ST_PatchN、ST_PointN、ST_SRID、ST_StartPoint、ST_Summary、ST_X、ST_XMax、ST_XMin、ST_Y、ST_YMax、ST_YMin、ST_Z、ST_ZMax、ST_Zmflag、ST_ZMin</p>
</td>
</tr>
<tr id="row1997102165319"><td class="cellrowborder" valign="top" width="21.15%" headers="mcps1.2.3.1.1 "><p id="p796118260543"><a name="p796118260543"></a><a name="p796118260543"></a>Geometry Editors</p>
</td>
<td class="cellrowborder" valign="top" width="78.85%" headers="mcps1.2.3.1.2 "><p id="p1097115214532"><a name="p1097115214532"></a><a name="p1097115214532"></a>ST_AddPoint、ST_Affine、ST_Force2D、ST_Force3D、ST_Force3DZ、ST_Force3DM、ST_Force4D、ST_ForceCollection、ST_ForceSFS、ST_ForceRHR、ST_LineMerge、ST_CollectionExtract、ST_CollectionHomogenize、ST_Multi、ST_RemovePoint、ST_Reverse、ST_Rotate、ST_RotateX、ST_RotateY、ST_RotateZ、ST_Scale、ST_Segmentize、ST_SetPoint、ST_SetSRID、ST_SnapToGrid、ST_Snap、ST_Transform、ST_Translate、ST_TransScale</p>
</td>
</tr>
<tr id="row1297132115534"><td class="cellrowborder" valign="top" width="21.15%" headers="mcps1.2.3.1.1 "><p id="p3121194017543"><a name="p3121194017543"></a><a name="p3121194017543"></a>Geometry Outputs</p>
</td>
<td class="cellrowborder" valign="top" width="78.85%" headers="mcps1.2.3.1.2 "><p id="p197132120536"><a name="p197132120536"></a><a name="p197132120536"></a>ST_AsBinary、ST_AsEWKB、ST_AsEWKT、ST_AsGeoJSON、ST_AsGML、ST_AsHEXEWKB、ST_AsKML、ST_AsLatLonText 、ST_AsSVG、ST_AsText、ST_AsX3D、ST_GeoHash</p>
</td>
</tr>
<tr id="row19971182117536"><td class="cellrowborder" valign="top" width="21.15%" headers="mcps1.2.3.1.1 "><p id="p41350135414"><a name="p41350135414"></a><a name="p41350135414"></a>Operators</p>
</td>
<td class="cellrowborder" valign="top" width="78.85%" headers="mcps1.2.3.1.2 "><p id="p1297142155317"><a name="p1297142155317"></a><a name="p1297142155317"></a>&amp;&amp;、&amp;&amp;&amp;、&amp;&lt;、&amp;&lt;|、&amp;&gt;、&lt;&lt;、&lt;&lt;|、=、&gt;&gt;、@ 、|&amp;&gt; 、|&gt;&gt;、~、~=、&lt;-&gt;、&lt;#&gt;</p>
</td>
</tr>
<tr id="row12971182115314"><td class="cellrowborder" valign="top" width="21.15%" headers="mcps1.2.3.1.1 "><p id="p149711221175319"><a name="p149711221175319"></a><a name="p149711221175319"></a>Spatial Relationships and Measurements</p>
</td>
<td class="cellrowborder" valign="top" width="78.85%" headers="mcps1.2.3.1.2 "><p id="p6971421155314"><a name="p6971421155314"></a><a name="p6971421155314"></a>ST_3DClosestPoint、ST_3DDistance、ST_3DDWithin、ST_3DDFullyWithin、ST_3DIntersects、ST_3DLongestLine、ST_3DMaxDistance、ST_3DShortestLine、ST_Area、ST_Azimuth、ST_Centroid、ST_ClosestPoint、ST_Contains、ST_ContainsProperly、ST_Covers、ST_CoveredBy、ST_Crosses、ST_LineCrossingDirection、ST_Disjoint、ST_Distance、ST_HausdorffDistance、ST_MaxDistance、ST_DistanceSphere、ST_DistanceSpheroid、ST_DFullyWithin、ST_DWithin、ST_Equals、ST_HasArc、ST_Intersects、ST_Length、ST_Length2D、ST_3DLength、ST_Length_Spheroid、ST_Length2D_Spheroid、ST_3DLength_Spheroid、ST_LongestLine、ST_OrderingEquals、ST_Overlaps、ST_Perimeter、ST_Perimeter2D、ST_3DPerimeter、ST_PointOnSurface、ST_Project、ST_Relate、ST_RelateMatch、ST_ShortestLine、ST_Touches、ST_Within</p>
</td>
</tr>
<tr id="row2971112115316"><td class="cellrowborder" valign="top" width="21.15%" headers="mcps1.2.3.1.1 "><p id="p620562615557"><a name="p620562615557"></a><a name="p620562615557"></a>Geometry Processing</p>
</td>
<td class="cellrowborder" valign="top" width="78.85%" headers="mcps1.2.3.1.2 "><p id="p15971421115310"><a name="p15971421115310"></a><a name="p15971421115310"></a>ST_Buffer、ST_BuildArea、ST_Collect、ST_ConcaveHull、ST_ConvexHull、ST_CurveToLine、ST_DelaunayTriangles、ST_Difference、ST_Dump、ST_DumpPoints、ST_DumpRings、ST_FlipCoordinates、ST_Intersection、ST_LineToCurve、ST_MakeValid、ST_MemUnion、ST_MinimumBoundingCircle、ST_Polygonize、ST_Node、ST_OffsetCurve、ST_RemoveRepeatedPoints、ST_SharedPaths、ST_Shift_Longitude、ST_Simplify、ST_SimplifyPreserveTopology、ST_Split、ST_SymDifference、ST_Union、ST_UnaryUnion</p>
</td>
</tr>
<tr id="row697122195317"><td class="cellrowborder" valign="top" width="21.15%" headers="mcps1.2.3.1.1 "><p id="p1511184455511"><a name="p1511184455511"></a><a name="p1511184455511"></a>Linear Referencing</p>
</td>
<td class="cellrowborder" valign="top" width="78.85%" headers="mcps1.2.3.1.2 "><p id="p9971921165313"><a name="p9971921165313"></a><a name="p9971921165313"></a>ST_LineInterpolatePoint、ST_LineLocatePoint、ST_LineSubstring、ST_LocateAlong、ST_LocateBetween、ST_LocateBetweenElevations、ST_InterpolatePoint、ST_AddMeasure</p>
</td>
</tr>
<tr id="row2971172165312"><td class="cellrowborder" valign="top" width="21.15%" headers="mcps1.2.3.1.1 "><p id="p1397118218530"><a name="p1397118218530"></a><a name="p1397118218530"></a>Miscellaneous Functions</p>
</td>
<td class="cellrowborder" valign="top" width="78.85%" headers="mcps1.2.3.1.2 "><p id="p1697182135318"><a name="p1697182135318"></a><a name="p1697182135318"></a>ST_Accum、Box2D、Box3D、ST_Expand、ST_Extent、ST_3Dextent、Find_SRID、ST_MemSize</p>
</td>
</tr>
<tr id="row6971721205312"><td class="cellrowborder" valign="top" width="21.15%" headers="mcps1.2.3.1.1 "><p id="p797162111538"><a name="p797162111538"></a><a name="p797162111538"></a>Exceptional Functions</p>
</td>
<td class="cellrowborder" valign="top" width="78.85%" headers="mcps1.2.3.1.2 "><p id="p5971102115535"><a name="p5971102115535"></a><a name="p5971102115535"></a>PostGIS_AddBBox、PostGIS_DropBBox、PostGIS_HasBBox</p>
</td>
</tr>
</tbody>
</table>

## 空间索引<a name="section2993751311"></a>

openGauss数据库的PostGIS Extension支持GIST \(Generalized Search Tree\) 空间索引（分区表除外）。相比于B-tree索引，GIST索引适应于任意类型的非常规数据结构，可有效提高几何和地理数据信息的检索效率。

使用如下命令创建GIST索引：

```
openGauss=# CREATE INDEX indexname ON tablename USING GIST ( geometryfield );
```

## 扩展限制<a name="section13902113312416"></a>

-   只支持行存表。
-   不支持拓扑对象管理模块Topology和栅格数据处理模块Raster。
-   不支持BRIN索引。
-   spatial\_ref\_sys表在扩容期间只支持查询操作。

